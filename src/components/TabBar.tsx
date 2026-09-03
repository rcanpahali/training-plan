import styled from '@emotion/styled'
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

const TabBtn = styled.button`
  position: relative;
  color: var(--text-faint);
  border-top: 5px solid transparent;

  &.active {
    color: var(--text);
    border-top-color: var(--tab-accent, var(--accent));
  }
`

const TabDot = styled.span`
  background: var(--tab-accent, var(--accent));
`

export default function TabBar({ days, activeIndex, onSelect }: TabBarProps) {
  return (
    <div
      className="flex flex-shrink-0 bg-[var(--bg-raised)] border-t border-[var(--line)]"
      style={{ paddingBottom: 'var(--safe-bottom)' }}
    >
      {days.map((day, i) => {
        const active = i === activeIndex
        return (
          <TabBtn
            key={day.label}
            type="button"
            className={`flex-1 flex flex-col items-center gap-1 pt-2.5 pb-2 ${active ? 'active' : ''}`}
            style={{ '--tab-accent': accentVar[day.accent] } as CSSProperties}
            onClick={() => onSelect(i)}
          >
            <TabDot className="w-1.5 h-1.5 rounded-full" style={{ opacity: active ? 1 : 0.35 }} />
            <span className="font-display text-lg font-extrabold leading-none">Day {i + 1}</span>
            <span className="text-[13px] text-[var(--text-faint)] leading-none">{day.label}</span>
          </TabBtn>
        )
      })}
    </div>
  )
}
