import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import NotesDetail from './NotesDetail';

class NotesList extends Component {
  /*
   * On component update fetch the notes list
   *
  */
 constructor() {
   super();
   this.state = {
     notes: []
   };
 }

 componentDidMount() {
   self = this;
   axios.get('http://localhost:8000/notes/').then(function(response) {
     const notes_objs = response.data;
     const notes = [];
     /*
      *let i;
      *for(i = 0; i < notes_objs.length; i++) {
      *  notes.push(notes_objs[i].text);
      *}
      */
     self.setState({notes: notes_objs})
   }).catch(function(err) {
     console.log("yo there is an error in fetch");
   });
 }

 starFoulWords() {
   /* TODO: mark star foul words
    *
    */
 }

  render() {
    const notes = this.state.notes;
    return (
      <Router>
        <div className="notes-list-container">
          { notes.map(function(note, index) {
            return (
              <div className="col-xs-12">
                <Link to={`/${note.id}`} key={index}>
                  {note.text}
                </Link>
              </div>
            )
          })}
          <Route path="/:id" component={NotesDetail} />
        </div>
      </Router>
    )
  }
}

export default NotesList;
