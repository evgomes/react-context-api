import React, { useContext } from 'react';

import NotesContext from '../../contexts/NotesContext';

import './NotesList.css';
import Note from '../Note/Note';

const NotesList = () => {
    const context = useContext(NotesContext);

    const notes = context.notes.map((n, i) => {
        return <Note key={i} id={n.id} title={n.title} text={n.text} />
    });

    const contentToRender = (notes.length === 0) ? <p className="advice">There are no notes yet.</p>
                                                 : notes;

    return (  
        <div className="notes-list">
            {contentToRender}
        </div>
    );
}
 
export default NotesList;