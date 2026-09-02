import { useState } from 'react'

function clamp(val: number, even: boolean) {
  val = Math.round(val)
  if (even && val % 2 !== 0) val = Math.round(val / 2) * 2
  return val < 0 ? 0 : val
}

export function useWeight(key: string, defaultValue: number, even: boolean) {
  const step = even ? 2 : 1

  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem('weight_' + key)
    return clamp(saved !== null ? parseFloat(saved) : defaultValue, even)
  })

  const set = (val: number) => {
    const clamped = clamp(val, even)
    localStorage.setItem('weight_' + key, String(clamped))
    setValue(clamped)
  }

  return { value, step, set }
}
