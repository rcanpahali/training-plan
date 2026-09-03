import styled from '@emotion/styled'
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

const BREAKPOINT = 640
const DEVICE_WIDTH = 410
const DEVICE_HEIGHT = 912
const BEZEL = 12
const FRAME_WIDTH = DEVICE_WIDTH + BEZEL * 2
const FRAME_HEIGHT = DEVICE_HEIGHT + BEZEL * 2
const MARGIN = 24
const CAPTION_SPACE = 32
const SAFE_TOP = 30
const SAFE_BOTTOM = 24
const STORAGE_KEY = 'deviceFrame'

const Backdrop = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: var(--bg);
`

const Scaler = styled.div`
  display: flex;
`

const Bezel = styled.div`
  width: ${FRAME_WIDTH}px;
  height: ${FRAME_HEIGHT}px;
  padding: ${BEZEL}px;
  background: #000;
  border-radius: 54px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.55);
`

const Viewport = styled.div`
  position: relative;
  width: ${DEVICE_WIDTH}px;
  height: ${DEVICE_HEIGHT}px;
  overflow: hidden;
  border-radius: 42px;
  background: var(--bg);
  contain: layout;

  .h-dvh {
    height: 100%;
  }

  .lightbox-img {
    max-height: 60%;
  }
`

const Camera = styled.div`
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 20;
  pointer-events: none;
`

const Caption = styled.div`
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--text-faint);
`

const Toggle = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--bg-raised);
  border: 1px solid var(--line);
  color: var(--text-muted);
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  z-index: 30;

  &:active {
    background: var(--accent-soft);
    color: var(--accent);
    border-color: var(--accent);
  }
`

function useFrameLayout() {
  const [isWide, setIsWide] = useState(() => window.innerWidth >= BREAKPOINT)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => {
      setIsWide(window.innerWidth >= BREAKPOINT)
      const availWidth = window.innerWidth - MARGIN * 2
      const availHeight = window.innerHeight - MARGIN * 2 - CAPTION_SPACE
      const next = Math.min(1, availWidth / FRAME_WIDTH, availHeight / FRAME_HEIGHT)
      setScale(Math.max(0.3, next))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return { isWide, scale }
}

export default function DeviceFrame({ children }: { children: ReactNode }) {
  const { isWide, scale } = useFrameLayout()
  const [framed, setFramed] = useState(() => localStorage.getItem(STORAGE_KEY) !== 'off')

  const toggleFramed = () => {
    setFramed((prev) => {
      const next = !prev
      localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off')
      return next
    })
  }

  if (!isWide) return <>{children}</>

  if (!framed) {
    return (
      <>
        {children}
        <Toggle type="button" onClick={toggleFramed} aria-label="Show phone frame">
          ⤢
        </Toggle>
      </>
    )
  }

  return (
    <Backdrop>
      <Scaler style={{ transform: `scale(${scale})` }}>
        <Bezel>
          <Viewport style={{ '--safe-top': `${SAFE_TOP}px`, '--safe-bottom': `${SAFE_BOTTOM}px` } as CSSProperties}>
            {children}
            <Camera />
          </Viewport>
        </Bezel>
      </Scaler>
      <Caption>Pixel 10 Pro</Caption>
      <Toggle type="button" onClick={toggleFramed} aria-label="Exit phone frame">
        ⤡
      </Toggle>
    </Backdrop>
  )
}
