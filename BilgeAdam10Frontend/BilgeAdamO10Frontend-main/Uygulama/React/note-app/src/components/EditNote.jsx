import React, { useState } from 'react'

const EditNote = ({note, onCancel, onUpdate}) => {
  const [text, setText] = useState(note.text)

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(note.id, text)
  }

  return (
    <div className='edit-note'>
      <h2>Notu Düzenle</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Notunuzu buraya girin...' value={text} onChange={e => setText(e.target.value)}/>
            <div className="buttons">
              <button type='submit'>Kaydet</button>
              <button onClick={onCancel} >İptal</button>
            </div>
      </form>
    </div>
  )
}

export default EditNote