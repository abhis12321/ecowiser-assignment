import React from 'react'

export default function Note({note}) {
  return (
    <div>
      <h3 className="">{note.title}</h3>
      <p className="">{note.tagline}</p>
    </div>
  )
}