import React from 'react'

const CreateNotes = ({inputtext, setInputText, saveHandler}) => {
  return (
    <div className='create-note'>
      <textarea
      className='note-input'
        cols={10}
        rows={5}
        placeholder="Write note..."
        value={inputtext}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={1000}
      ></textarea>
      <div className='note_footer'>
       <span className='label'>
  {1000 - inputtext.length} characters left
</span>
        <button className='note_save' onClick={saveHandler}>Save</button>
    </div>
    </div>
  )
}

export default CreateNotes
