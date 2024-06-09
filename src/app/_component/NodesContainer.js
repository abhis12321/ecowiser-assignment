import React from 'react';
import NoteBox from './NoteBox';

export default function NoteContainer({ notes , currentPage , saveNote }) {
    return (
        <div className="w-[98%] max-w-[1000px] mx-auto flex flex-wrap gap-4 justify-center items-center overflow-auto px-4 py-6 bg-red-50">
            {currentPage.map((index , i) => (
                <NoteBox key={i} note={notes[index]} saveNote={saveNote} exist={index} />
            ))}
        </div>
    );
};

