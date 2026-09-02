import type { CSSProperties } from 'react'
import type { Day, DayAccent } from '../data/exercises'

interface TabBarProps {
  days: Day[]
  activeIndex: number
  onSelect: (index: number) => void
}

const accentVar: Record<DayAccent, string> = {
  blue: 'var(--day-blue)',
  gold: 'var(--day-gold)',
  green: 'var(--day-green)',
}

export default function TabBar({ days, activeIndex, onSelect }: TabBarProps) {
  return (
    <div
      className="flex flex-shrink-0 bg-[var(--bg-raised)] border-t border-[var(--line)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
    >
      {days.map((day, i) => {
        const active = i === activeIndex
        return (
          <button
            key={day.label}
            type="button"
            className={`tab-btn flex-1 flex flex-col items-center gap-1 pt-2.5 pb-2 ${active ? 'active' : ''}`}
            style={{ '--tab-accent': accentVar[day.accent] } as CSSProperties}
            onClick={() => onSelect(i)}
          >
            <span className="w-1.5 h-1.5 rounded-full tab-dot" style={{ opacity: active ? 1 : 0.35 }} />
            <span className="font-display text-sm font-extrabold leading-none">Day {i + 1}</span>
            <span className="text-[11px] text-[var(--text-faint)] leading-none">{day.label}</span>
          </button>
        )
      })}
    </div>
  )
}
