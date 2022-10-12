import React from 'react';
import Note from '../Modulables/Note';
import notes from '../../data/fakeData.json';

function NoteBoard() {
  
  return (
    <div className="note-board">
      {/* <Note datas={notes} /> */}
      {notes.map((note) => 
        (<Note title={note.title} content={note.content} category={note.category} key={note.title} />)
      )}
    </div>
  );
}

export default NoteBoard;
