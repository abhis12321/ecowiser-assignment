"use client"
import React, { useEffect, useState } from 'react'
import NoteForm from './_component/NoteForm'
import PaginationHandler from './_component/PaginationHandler';
import NotesContainer from './_component/NodesContainer';

export default function page() {
  const [newNote , setNewNote] = useState(false);
  const [currentNotes, setCurrentNotes] = useState([]);
  const [notes, setNotes] = useState([
    { title: "AKTU", tagline: "1hahaha", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "2HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "3HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "4HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "5HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "6HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "7HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "8HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "9HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "10HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "11HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "12HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "13HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "14HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "15HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "16HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "17HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "18HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "19HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "20HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "21HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
    { title: "HBTU", tagline: "22HAHAHAHA", body: "hello dear it's the body of the note #nodebody" },
  ]);

  useEffect(() => {
    paginate(0);
  }, []);

  const paginate = (start) => {
    let currentNotePages = [];
    for (let i = start; i < start + 6 && i < notes.length; i++) {
      currentNotePages.push(i);
    }
    setCurrentNotes([...currentNotePages]);
  }

  const saveNote = async (note , exist) => {
    if(!exist && exist !== 0) {
      notes.push(note);
    } else {
      notes[exist] = note;
    }

    // console.log(exist , note);
    setNotes([...notes]);
  };


  return (
    <div className='h-[100vh] flex flex-col items-center justify-evenly w-full'>
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
