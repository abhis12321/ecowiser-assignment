import React from 'react'

export default function NoteBox({note}) {
  return (
    <div className='ring-1 rounded p-4 min-w-[320px] flex gap-2 flex-col items-center justify-center'>
      <h3 className="text-lg font-bold text-red-950">{note.title}</h3>
      <p className="text-xs text-red-950 font-semibold">{note.tagline}</p>
    </div>
  )
}
