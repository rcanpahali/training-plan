import styled from '@emotion/styled'
import { useState, type MouseEvent } from 'react'
import type { Exercise } from '../data/exercises'

interface LightboxProps {
  exercise: Exercise | null
  onClose: () => void
}

const CopyBtn = styled.span`
  font-size: 20px;
  color: var(--text-muted);
  cursor: pointer;
  padding: 10px 14px;
  border-radius: 10px;
  background: var(--bg-raised);
  border: 1px solid var(--line);
  line-height: 1;
  user-select: none;

  &.copied {
    color: var(--accent);
    background: var(--accent-soft);
    border-color: var(--accent);
  }
`

export default function Lightbox({ exercise, onClose }: LightboxProps) {
  const [copied, setCopied] = useState(false)

  if (!exercise) return null

  const query = encodeURIComponent(exercise.name + ' exercise')

  const copyName = (e: MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(exercise.name).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-6 gap-5"
      onClick={onClose}
    >
      <div
        className="absolute right-4 flex items-center justify-center w-11 h-11 rounded-full bg-[var(--bg-raised)] border border-[var(--line)] text-xl text-[var(--text-muted)] cursor-pointer"
        style={{ top: 'calc(var(--safe-top) + 16px)' }}
      >
        ✕
      </div>
      <img
        src={exercise.image}
        alt=""
        className="lightbox-img max-w-full max-h-[60vh] rounded-2xl object-contain"
      />
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-[var(--text)] text-center">{exercise.name}</span>
        <CopyBtn className={copied ? 'copied' : ''} onClick={copyName}>
          ⎘
        </CopyBtn>
      </div>
      <div className="flex gap-3 w-full">
        <a
          href={`https://www.youtube.com/results?search_query=${query}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 text-center py-3.5 rounded-xl text-sm font-semibold text-[#ff6b6b] bg-red-900/30 border border-red-700/40"
        >
          YouTube
        </a>
        <a
          href={`https://www.google.com/search?q=${query}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 text-center py-3.5 rounded-xl text-sm font-semibold text-[#7ab3ff] bg-blue-900/30 border border-blue-700/40"
        >
          Google
        </a>
      </div>
    </div>
  )
}
