import React from 'react'

const Notes = ({notes, onStartEditing, onDelete}) => {
  return (
    <div className='notes'>
        <h2>Notlarım</h2>
        {notes.map(note => (
            <div className='note'>
                <p>{note.text}</p>
                <div className='buttons'>
                    <button onClick={() => onStartEditing(note)}>Düzenle</button>
                    <button onClick={() => onDelete(note.id)}>Sil</button>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Notes