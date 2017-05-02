import React, { Component } from 'react';

class CreateNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_note: ''
    };
  }

  handleNewNote() {
    console.log(this.state.new_note);
  }

  handleChange(e) {
    this.setState({new_note: e.target.value})
  }

  displayRemainingCharacters() {
    /* TODO: Display remaining characters
     *
     */
  }

  render() {
    return (
      <form action="/notes">
        <textarea id="note" name="note" rows="5" cols="50" placeholder="Type your thoughts" onChange={this.handleChange.bind(this)}> </textarea>
        <input type="button" value="Save" onClick={this.handleNewNote.bind(this)} />
      </form>
    )
  }
}

export default CreateNotes;
