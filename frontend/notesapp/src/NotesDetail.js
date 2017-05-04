import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class NotesDetail extends Component {
  constructor(match) {
    console.log("i am here");
    super();
    this.state = {
      id: match.match.params.id,
      notes_detail: new Object
    };
  }

  componentDidMount() {
    self = this;
    console.log(this.state)
    /*
     *id = this.state.id;
     */
    axios.get('http://localhost:8000/notes/').then(function(response) {
     const notes_obj = response.data;
     /*
      *let i;
      *for(i = 0; i < notes_objs.length; i++) {
      *  notes.push(notes_objs[i].text);
      *}
      */
     self.setState({notes_detail: notes_obj})
   }).catch(function(err) {
     console.log("yo there is an error in fetch");
   });
  }

  render() {
    return <p> {this.state.id} </p>
  }
}

export default NotesDetail;
