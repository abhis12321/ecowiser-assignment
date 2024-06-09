"use client"
import React, { useEffect, useState } from 'react'
import NoteForm from './_component/NoteForm'
import PaginationHandler from './_component/PaginationHandler';
import NoteList from './_component/NodesContainer';

export default function page() {
  const [currentNotes, setCurrentNotes] = useState([]);
  const [notes , setNotes] = useState([
    {title:"AKTU" , tagline:"1hahaha"} ,
     {title:"HBTU" , tagline:"2HAHAHAHA"},
     {title:"HBTU" , tagline:"3HAHAHAHA"},
     {title:"HBTU" , tagline:"4HAHAHAHA"},
     {title:"HBTU" , tagline:"5HAHAHAHA"},
     {title:"HBTU" , tagline:"6HAHAHAHA"},
     {title:"HBTU" , tagline:"7HAHAHAHA"},
     {title:"HBTU" , tagline:"8HAHAHAHA"},
     {title:"HBTU" , tagline:"9HAHAHAHA"},
     {title:"HBTU" , tagline:"10HAHAHAHA"},
     {title:"HBTU" , tagline:"11HAHAHAHA"},
     {title:"HBTU" , tagline:"12HAHAHAHA"},
     {title:"HBTU" , tagline:"13HAHAHAHA"},
     {title:"HBTU" , tagline:"14HAHAHAHA"},
     {title:"HBTU" , tagline:"15HAHAHAHA"},
     {title:"HBTU" , tagline:"16HAHAHAHA"},
     {title:"HBTU" , tagline:"17HAHAHAHA"},
     {title:"HBTU" , tagline:"18HAHAHAHA"},
     {title:"HBTU" , tagline:"19HAHAHAHA"},
     {title:"HBTU" , tagline:"20HAHAHAHA"},
     {title:"HBTU" , tagline:"21HAHAHAHA"},
     {title:"HBTU" , tagline:"22HAHAHAHA"},
  ]);

  useEffect(() => {
    paginate(0);
  } , []);
  const paginate = (start) => {
    let currentNotePages = [];
    for(let i = start; i < start + 6 && i < notes.length; i++) {
      currentNotePages.push(notes[i]);
    }
    setCurrentNotes([...currentNotePages]);
  }

  return (
    <div className='h-[100vh] flex flex-col items-center justify-evenly w-full'>
      {/* <NoteForm /> */}
      <NoteList notes={currentNotes} />
      <PaginationHandler paginate={paginate} totalNotes={notes.length} />
    </div>
  )
}
