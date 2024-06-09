import React from 'react';
import NoteBox from './NoteBox';

export default function NoteList({ notes}) {
    return (
        <div className="w-[98%] max-w-[1000px] mx-auto flex gap-2 overflow-auto p-1 bg-red-200">
            {notes.map((note , index) => (
                <NoteBox key={index} note={note} />
            ))}
        </div>
    );
};

