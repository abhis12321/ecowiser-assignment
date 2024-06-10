"use client"
import React, { useEffect, useState } from 'react'
import NoteForm from './_component/NoteForm'
import PaginationHandler from './_component/PaginationHandler';
import NotesContainer from './_component/NodesContainer';
import axios from 'axios';

export default function page() {
  const [newNote , setNewNote] = useState(false);
  const [currentNotes, setCurrentNotes] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/api')
        .then(res => res.data)
        .then(data => data.notes) 
        .then(Notes => setNotes([...Notes]))
        .catch(error => console.log(error.message));
  }, []);

  useEffect(() => {
    paginate(0);
  } , [notes]);

  const paginate = (start) => {
    let currentNotePages = [];
    for (let i = start; i < start + 6 && i < notes.length; i++) {
      currentNotePages.push(i);
    }
    setCurrentNotes([...currentNotePages]);
  }

  const saveNote = async (note , exist) => {
    if(!exist && exist !== 0) {
      let newNote = await axios.post('/api' , note)
                              .then(res => res.data)
                              .catch(error => console.log(error.message));    
      if(newNote.success) {
        notes.push(newNote.Note);
      }

      console.log(newNote);
    } else {
      let newNote = await axios.put('/api' , note)
                              .then(res => res.data)
                              .catch(error => console.log(error.message));
      if(newNote?.success) {
        notes[exist] = newNote.Note;        
      }
    }
    setNotes([...notes]);
  };


  return (
    <div className='h-[100vh] py-4 gap-4 flex flex-col items-center justify-evenly w-full'>
      {/* <button onClick={e => console.log(notes.length)}>LOG</button> */}
      {
        newNote ? 
        <NoteForm saveNote={saveNote}  setEditable = {setNewNote} />
        :
        <div className="button py-2 px-6 bg-blue-800/80 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg cursor-pointer" onClick={e => setNewNote(true)}>add new note</div>
      }
      <NotesContainer notes={notes} currentPage={currentNotes} saveNote={saveNote} />
      <PaginationHandler paginate={paginate} totalNotes={notes.length} currentPage={currentNotes[0]/6 + 1}/>
    </div>
  )
}
