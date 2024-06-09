import React, { useState } from 'react'
import NoteForm from './NoteForm';

export default function NoteBox({note , saveNote , exist}) {
  const [editable , setEditable] = useState(false);
  return (
    <div className='ring-1 rounded p-4 min-w-[300px] flex gap-2 flex-col items-center justify-center bg-white' onClick={e => setEditable(true)}>
      <h3 className="text-lg font-bold text-red-950">{note.title}</h3>
      <p className="text-xs text-blue-900/40 font-bold">{note.tagline}</p>
      <p className="text-sm text-green-950/60 ">{note.body}</p>

      {
         editable && <NoteForm note={note} setEditable = {setEditable} saveNote={saveNote} exist={exist}/>
      }
    </div>
  )
}
