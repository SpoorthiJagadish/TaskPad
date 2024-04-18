import './App.css'
import NotesList from './components/NotesList.jsx';
import {useState} from 'react';
import {nanoid} from 'nanoid';
function App() {
  const[notes,setNotes]=useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "18/04/2024"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "19/04/2024"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "21/04/2024"
  },
  {
    id: nanoid(),
    text: "This is my new note!",
    date: "20/04/2024"
  },
 
]); 

 const addNote= (text) => {
 
  const date = new Date();
  const newNote={
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
    
  }
  const newNotes= [...notes,newNote]; //new array instead of update old array
  setNotes(newNotes); //allows components to rerender
 };
  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addNote} />
      
    </div>
  );
};

export default App;
