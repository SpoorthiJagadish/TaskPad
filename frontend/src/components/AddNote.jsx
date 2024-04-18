import{useState} from 'react';

const AddNote=({handleAddNote}) =>{
    const[noteText, setNoteText] =useState('');
    const handleChange =(event)=> {
        setNoteText(event.target.value); //value updates at every keystroke

    };
    // call it from event handler function
     const handleSaveClick=() => {
        if (noteText.trim().length>0){ //when there text from previous note/ blank note
            handleAddNote(noteText);
        setNoteText(''); //reset form when new note is added
        }

     

     }

    return (
    <div ClassName="note new" >
        <textarea 
        rows='8'
         cols='10'
         placeholder='Type to add a note...' 
         value={noteText}
         onChange={handleChange}
         > </textarea>
         <div className="note-footer"></div>
         <small> 200 Remaining </small>
         <button className="save" onClick={handleSaveClick}> Save   </button>

         </div>
         );


};

export default AddNote;