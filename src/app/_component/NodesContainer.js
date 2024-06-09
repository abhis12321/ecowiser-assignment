import React from 'react';
import NoteBox from './NoteBox';

export default function NoteList({ notes}) {
    return (
        <div className="w-[98%] max-w-[1000px] mx-auto flex flex-wrap gap-4 justify-center items-center overflow-auto p-1 bg-red-50">
            {notes.map((note , index) => (
                <NoteBox key={index} note={note} />
            ))}
        </div>
    );
};

