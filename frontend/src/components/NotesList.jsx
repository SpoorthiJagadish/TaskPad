import Note from './Note.jsx';
import AddNote from './AddNote.jsx';

const NotesList = ({ notes,handleAddNote })=> {
    return (
    <div className="notes-list">
        {notes.map((note)=> (
        <Note id={note.date} 
        text={note.text} 
        date={note.date}
        />
        ))}
        <AddNote handleaddNote= {handleAddNote }/>

    </div>
    );
};
export default NotesList;