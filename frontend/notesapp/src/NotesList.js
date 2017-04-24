import React, { Component } from 'react';
import axios from 'axios';


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
     let i;
     for(i = 0; i < notes_objs.length; i++) {
       notes.push(notes_objs[i].text);
     }
     self.setState({notes: notes})
   }).catch(function(err) {
     console.log("yo there is an error in fetch");
   });
 }

  render() {
    const notes = this.state.notes;
    return (
      <div className="notes-list-container">
        { notes.map(function(note, index) {
          return <p key={index}> {note}</p>
        })}
      </div>
    )
  }
}

export default NotesList;
