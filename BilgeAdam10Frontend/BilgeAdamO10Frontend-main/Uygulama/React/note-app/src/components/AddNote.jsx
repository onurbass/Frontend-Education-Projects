import React, { useState } from 'react'

const AddNote = ({onAdd}) => {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(text)
        setText("")
    }


  return (
    <div className='add-note'>
        <h2>Yeni Not Ekle</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Notunuzu buraya girin...' value={text} onChange={e => setText(e.target.value)}/>
            <button type='submit'>Ekle</button>
        </form>
    </div>
  )
}

export default AddNote