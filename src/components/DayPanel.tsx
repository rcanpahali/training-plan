import type { Day, Exercise } from '../data/exercises'
import ExerciseRow from './ExerciseRow'

interface DayPanelProps {
  day: Day
  active: boolean
  onEnlarge: (exercise: Exercise) => void
}

export default function DayPanel({ day, active, onEnlarge }: DayPanelProps) {
  return (
    <div className={`h-full overflow-y-auto overflow-x-hidden ${active ? '' : 'hidden'}`}>
      <div className="px-4 pb-4" style={{ paddingTop: 'calc(env(safe-area-inset-top, 0) + 12px)' }}>
        {day.exercises.map((exercise) => (
          <ExerciseRow key={exercise.key} exercise={exercise} active={active} onEnlarge={onEnlarge} />
        ))}
      </div>
    </div>
  )
}
