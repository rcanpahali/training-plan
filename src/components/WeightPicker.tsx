import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useWeight } from '../hooks/useWeight'

interface WeightPickerProps {
  exerciseKey: string
  defaultValue: number
  even: boolean
  active: boolean
}

const ITEM_WIDTH = 56
const MAX_WEIGHT = 200
const SETTLE_MS = 120
const STEP_JUMP = 2 // items nudged per tap of the +/- buttons

export default function WeightPicker({ exerciseKey, defaultValue, even, active }: WeightPickerProps) {
  const { value, step, set } = useWeight(exerciseKey, defaultValue, even)
  const scrollRef = useRef<HTMLDivElement>(null)
  const settleTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const values = useMemo(() => {
    const count = Math.floor(MAX_WEIGHT / step) + 1
    return Array.from({ length: count }, (_, i) => i * step)
  }, [step])

  const [activeIndex, setActiveIndex] = useState(() => Math.round(value / step))
  // Mirrors activeIndex but updates synchronously, so rapid taps compute from the
  // real current position instead of a stale render closure.
  const activeIndexRef = useRef(activeIndex)
  // True while a tap/nudge-driven scrollTo animation is (supposedly) in flight.
  // Chromium can stall a smooth scrollTo short of its target when it's retargeted
  // mid-animation by a fast second tap, so scroll events firing during this window
  // are transient noise, not the user's intent, and must not overwrite the value
  // goToIndex already committed.
  const programmaticScroll = useRef(false)

  // Snap to the stored value with no animation whenever this picker becomes visible.
  // A picker mounted while its day panel is display:none can't lay out its scroll
  // container, so this also re-applies once the panel is actually shown.
  useLayoutEffect(() => {
    if (!active) return
    const el = scrollRef.current
    if (!el) return
    el.scrollLeft = activeIndex * ITEM_WIDTH
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  useEffect(() => () => clearTimeout(settleTimer.current), [])

  // Once the animation has been quiet for a beat, stop suppressing scroll-driven
  // updates, and snap-correct the wheel in case it stalled short of its target.
  const armSettle = (targetIndex: number) => {
    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(() => {
      programmaticScroll.current = false
      const el = scrollRef.current
      const target = targetIndex * ITEM_WIDTH
      if (el && Math.abs(el.scrollLeft - target) > 1) el.scrollLeft = target
    }, SETTLE_MS)
  }

  const goToIndex = (index: number) => {
    activeIndexRef.current = index
    setActiveIndex(index)
    set(values[index])
    programmaticScroll.current = true
    scrollRef.current?.scrollTo({ left: index * ITEM_WIDTH, behavior: 'smooth' })
    armSettle(index)
  }

  const handleScroll = () => {
    if (programmaticScroll.current) {
      armSettle(activeIndexRef.current)
      return
    }

    const el = scrollRef.current
    if (!el) return
    const index = Math.min(values.length - 1, Math.max(0, Math.round(el.scrollLeft / ITEM_WIDTH)))
    activeIndexRef.current = index
    setActiveIndex(index)

    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(() => set(values[index]), SETTLE_MS)
  }

  const nudge = (dir: 1 | -1) => {
    goToIndex(Math.min(values.length - 1, Math.max(0, activeIndexRef.current + dir * STEP_JUMP)))
  }

  return (
    <div className="mt-3 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
      <div className="w-step-btn" onClick={() => nudge(-1)} aria-label="Decrease weight">
        −
      </div>
      <div className="w-picker-wrap">
        <div ref={scrollRef} className="w-picker-scroll" onScroll={handleScroll}>
          <div className="w-spacer" />
          {values.map((n, i) => {
            const dist = Math.abs(i - activeIndex)
            const isActive = dist === 0
            return (
              <div
                key={n}
                className={`w-item font-display tabular ${isActive ? 'font-extrabold' : 'font-bold'}`}
                style={{
                  opacity: dist === 0 ? 1 : dist === 1 ? 0.5 : 0.28,
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  fontSize: isActive ? 26 : 18,
                }}
                onClick={() => goToIndex(i)}
              >
                {n}
              </div>
            )
          })}
          <div className="w-spacer" />
        </div>
        <div className="w-picker-indicator" />
      </div>
      <div className="w-step-btn" onClick={() => nudge(1)} aria-label="Increase weight">
        +
      </div>
    </div>
  )
}
