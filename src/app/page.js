"use client"
import React, { useEffect, useState } from 'react'
import NoteForm from './_component/NoteForm'
import PaginationHandler from './_component/PaginationHandler';
import NoteList from './_component/NodesContainer';

export default function page() {
  const [currentNotes, setCurrentNotes] = useState([]);
  const [notes , setNotes] = useState([{title:"AKTU" , tagline:"hahaha"} , {title:"HBTU" , tagline:"HAHAHAHA"}]);

  useEffect(() => {
    paginate(1);
  } , []);
  const paginate = (start) => {
    let currentNotePages = [];
    for(let i = start-1; i < start + 5 && i < notes.length; i++) {
      currentNotePages.push(notes[i]);
    }
    setCurrentNotes([...currentNotePages]);
  }

  return (
    <div>
      <NoteForm />
      <NoteList notes={currentNotes} />
      <PaginationHandler paginate={paginate} totalNotes={notes.length} />
    </div>
  )
}
