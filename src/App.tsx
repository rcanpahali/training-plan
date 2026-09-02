import { useState } from 'react'
import DayPanel from './components/DayPanel'
import Lightbox from './components/Lightbox'
import TabBar from './components/TabBar'
import { days, type Exercise } from './data/exercises'

function defaultTabForToday() {
  const index = days.findIndex((day) => day.weekday === new Date().toLocaleDateString('en-US', { weekday: 'long' }))
  return index === -1 ? 0 : index
}

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem('activeTab')
    return saved !== null ? parseInt(saved, 10) : defaultTabForToday()
  })
  const [selected, setSelected] = useState<Exercise | null>(null)

  const selectTab = (i: number) => {
    setActiveTab(i)
    localStorage.setItem('activeTab', String(i))
  }

  return (
    <div className="flex flex-col h-dvh">
      <div className="flex-1 overflow-hidden">
        {days.map((day, i) => (
          <DayPanel key={day.label} day={day} active={i === activeTab} onEnlarge={setSelected} />
        ))}
      </div>
      <TabBar days={days} activeIndex={activeTab} onSelect={selectTab} />
      <Lightbox exercise={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
