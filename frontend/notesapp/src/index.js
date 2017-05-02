import React from 'react';
import ReactDOM from 'react-dom';
/*
 *import App from './App';
 */
import CreateNotes from './CreateNotes';
import NotesList from './NotesList';
import './index.css';

ReactDOM.render(
  /*
   *<App />,
   */
  <div>
  <CreateNotes />
  <NotesList />
  </div>,
  document.getElementById('root')
);
