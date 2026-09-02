import type { Exercise } from '../data/exercises'
import WeightPicker from './WeightPicker'

interface ExerciseRowProps {
  exercise: Exercise
  active: boolean
  onEnlarge: (exercise: Exercise) => void
}

export default function ExerciseRow({ exercise, active, onEnlarge }: ExerciseRowProps) {
  return (
    <div
      className="exercise-row py-3.5 border-b border-[var(--line)] cursor-pointer"
      onClick={() => onEnlarge(exercise)}
    >
      <div className="flex items-center gap-3">
        <div className="thumb">
          <img src={exercise.image} alt="" />
          <div className="sets-badge font-display tabular">{exercise.sets}</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold leading-tight">{exercise.name}</div>
          {exercise.alt && <div className="text-[13px] text-[var(--text-muted)] mt-1">{exercise.alt}</div>}
        </div>
      </div>
      <WeightPicker exerciseKey={exercise.key} defaultValue={exercise.default} even={exercise.even} active={active} />
    </div>
  )
}
