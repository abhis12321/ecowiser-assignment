"use client"
import React, { useState } from 'react'
import NoteForm from './_component/NoteForm'
import PaginationHandler from './_component/PaginationHandler';

export default function page() {
  const [currentNotes, setCurrentNotes] = useState([]);
  const [notes , setNotes] = useState();

  const paginate = (start) => {
    currentNotes = [];
    for(let i = start-1; i < start + 5 && i < notes.length; i++) {
      currentNotes.push(notes[i]);
    }
    setCurrentNotes([...currentNotes]);
  }

  return (
    <div>
      <NoteForm />
      <PaginationHandler paginate={paginate} totalNotes={notes.length} />
    </div>
  )
}
