import React, { useState } from 'react';

export default function NoteForm({ onSave, note }) {
    const [title, setTitle] = useState(note ? note.title : '');
    const [tagline, setTagline] = useState(note ? note.tagline : '');
    const [body, setBody] = useState(note ? note.body : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, tagline, body, id: note ? note.id : null });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center justify-center w-[98%] max-w-[500px] mx-auto p-4 text-violet-800' style={{minHeight:'calc(90vh)'}}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required  className='ring-1 w-full p-2 rounded focus:ring-violet-700 border-none outline-none bg-blue-600/10'/>
            <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Tagline" required  className='ring-1 w-full p-2 rounded focus:ring-violet-700 border-none outline-none bg-blue-600/10'/>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" required  className='ring-1 w-full p-2 rounded focus:ring-violet-700 border-none outline-none bg-blue-600/10' rows={5}/>
            <button type="submit" className='ring-1 w-full p-2 rounded focus:ring-violet-700 border-none outline-none bg-red-800 hover:bg-red-600 text-white'>Save</button>
        </form>
    );
};

