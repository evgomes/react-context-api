import React from 'react';

const NotesContext = React.createContext({
    notes: [],
    lastUpdate: null,
    onAddNote: (note) => {},
    onDeleteNote: (note) => {},
});

export default NotesContext;