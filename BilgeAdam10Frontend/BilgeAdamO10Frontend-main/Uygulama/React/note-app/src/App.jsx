
import { useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import Notes from './components/Notes'
import EditNote from './components/EditNote'

function App() {
  const [notes, setNotes] = useState([])
  const [editNote, setEditNote] = useState("")

  const addNote = (text) => {
    setNotes([...notes, {id: Date.now(), text}])
  }

  const startEditing = (note) => {
    setEditNote(note)
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  return (
    <div className='app'>
      <h1>Notes App</h1>
      <div className="note-section">
        <Notes notes={notes} onStartEditing={startEditing} onDelete={deleteNote}/>
        <AddNote onAdd={addNote}/>
      </div>
      {editNote && <EditNote/>}
    </div>
  )
}

export default App
