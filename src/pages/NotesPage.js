import React, { useState } from "react";

import NotesContext from '../contexts/NotesContext';

import AddNote from "../components/AddNote/AddNote";

import "./NotesPage.css";
import Report from "../components/Report/Report";
import NotesList from "../components/NotesList/NotesList";

const NotesPage = () => {
  const [state, setState] = useState({
    notes: [],
    lastUpdate: null
  });

  const _onAddNote = note => {
    setState(prevState => ({
      ...prevState,
      notes: prevState.notes.concat(note),
      lastUpdate: new Date()
    }));
  };

  const _onDeleteNote = noteId => {
    setState(prevState => ({
      ...prevState,
      notes: prevState.notes.filter(n => n.id !== noteId),
      lastUpdate: new Date()
    }));
  };

  return (
    <NotesContext.Provider value={{
      ...state,
      onAddNote: _onAddNote,
      onDeleteNote: _onDeleteNote,
    }}>
      <div className="notesPage">
        <div className="addNote">
          <AddNote />
          <Report />
        </div>
        <div className="notes">
          <NotesList />
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export default NotesPage;
