import styled from '@emotion/styled'
import type { Exercise } from '../data/exercises'
import WeightPicker from './WeightPicker'

interface ExerciseRowProps {
  exercise: Exercise
  active: boolean
  onEnlarge: (exercise: Exercise) => void
}

const Row = styled.div`
  &:active {
    background: var(--bg-raised);
  }
`

const Thumb = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 132px;
  height: 88px;
  border-radius: 14px;
  overflow: hidden;
  background: var(--bg-raised);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`

const SetsBadge = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  background: rgba(20, 23, 26, 0.88);
  border: 1px solid rgba(237, 239, 239, 0.14);
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  padding: 5px 7px;
  border-radius: 6px;
`

export default function ExerciseRow({ exercise, active, onEnlarge }: ExerciseRowProps) {
  return (
    <Row className="py-3.5 border-b border-[var(--line)] cursor-pointer" onClick={() => onEnlarge(exercise)}>
      <div className="flex items-center gap-3">
        <Thumb>
          <img src={exercise.image} alt="" />
          <SetsBadge className="font-display tabular">{exercise.sets}</SetsBadge>
        </Thumb>
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold leading-tight">{exercise.name}</div>
          {exercise.alt && <div className="text-[13px] text-[var(--text-muted)] mt-1">{exercise.alt}</div>}
        </div>
      </div>
      <WeightPicker exerciseKey={exercise.key} defaultValue={exercise.default} even={exercise.even} active={active} />
    </Row>
  )
}
