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
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Tagline" required />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" required />
            <button type="submit">Save</button>
        </form>
    );
};

