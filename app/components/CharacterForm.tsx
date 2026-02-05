"use client"
import React, { useEffect, useState } from 'react'

export type CharacterData = {
  name: string
  level: number
  alignment?: string
  notes?: string
}

export default function CharacterForm({
  onChange,
}: {
  onChange: (data: CharacterData, valid: boolean) => void
}) {
  const [name, setName] = useState('')
  const [level, setLevel] = useState<number>(1)
  const [alignment, setAlignment] = useState<string>('')
  const [notes, setNotes] = useState<string>('')
  const [errors, setErrors] = useState<Record<string,string>>({})

  useEffect(() => {
    const errs: Record<string,string> = {}
    if (!name.trim()) errs.name = 'Name is required.'
    if (!Number.isFinite(level) || level < 1 || level > 20) errs.level = 'Level must be 1–20.'
    if (notes.length > 500) errs.notes = 'Notes must be 500 characters or less.'
    setErrors(errs)
    onChange({ name: name.trim(), level, alignment, notes }, Object.keys(errs).length === 0)
  }, [name, level, alignment, notes, onChange])

  return (
    <div className="char-form">
      <label>
        Name
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="E.g. Thalia Brightwood" />
        {errors.name && <div className="field-error">{errors.name}</div>}
      </label>

      <label>
        Level
        <input type="number" min={1} max={20} value={level} onChange={(e)=>setLevel(Number(e.target.value || 1))} />
        {errors.level && <div className="field-error">{errors.level}</div>}
      </label>

      <label>
        Alignment
        <select value={alignment} onChange={(e)=>setAlignment(e.target.value)}>
          <option value="">(choose)</option>
          <option>Lawful Good</option>
          <option>Neutral Good</option>
          <option>Chaotic Good</option>
          <option>Lawful Neutral</option>
          <option>True Neutral</option>
          <option>Chaotic Neutral</option>
          <option>Lawful Evil</option>
          <option>Neutral Evil</option>
          <option>Chaotic Evil</option>
        </select>
      </label>

      <label>
        Notes (optional)
        <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows={4} placeholder="Short description or pose notes (max 500 chars)" />
        {errors.notes && <div className="field-error">{errors.notes}</div>}
      </label>
    </div>
  )
}
