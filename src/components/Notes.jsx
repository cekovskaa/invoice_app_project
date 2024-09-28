import React from 'react';
import '../styles/Notes.css'; 

function Notes() {
  return (
    <div className="notes-section">
      <h2>Notes</h2>
      <textarea placeholder="Enter any additional notes here..." rows="5" cols="50"></textarea>
    </div>
  );
}

export default Notes;
