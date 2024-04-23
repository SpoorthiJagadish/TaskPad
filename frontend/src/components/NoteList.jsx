import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/taskpad/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    setFilteredNotes(
      notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [notes, searchQuery]);

  const handleSearch = () => {
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`/api/taskpad/notes/${noteId}`);
      setNotes(notes.filter(note => note._id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title..."
      />
      <button onClick={handleSearch}>Search</button>

      {filteredNotes.map(note => (
        <Note
          key={note._id}
          title={note.title}
          content={note.content}
          date={note.updatedAt} // You may need to format the date
          handleDelNote={() => handleDeleteNote(note._id)}
        />
      ))}
    </div>
  );
};

export default NoteList;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// import { extractTime } from '../utils/extractTime.js';
// import Note from './Note.jsx';

// const NoteList = () => {
//   const [notes, setNotes] = useState([]);
//   const [newNoteTitle, setNewNoteTitle] = useState('');
//   const [newNoteContent, setNewNoteContent] = useState('');

//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const response = await axios.get('/api/taskpad/notes'); // Adjust URL as per your backend route
//         setNotes(response.data);
//       } catch (error) {
//         console.error('Error fetching notes:', error);
//       }
//     };

//     fetchNotes();
//   }, []);

//   const handleAddNote = async () => {
//     try {
//       const response = await axios.post('/api/taskpad/notes', {
//         title: newNoteTitle,
//         content: newNoteContent
//       });
//       setNotes([...notes, response.data]);
//       setNewNoteTitle('');
//       setNewNoteContent('');
//     } catch (error) {
//       console.error('Error adding note:', error);
//     }
//   };

//   const handleDeleteNote = async (noteId) => {
//     try {
//       await axios.delete(`/api/taskpad/notes/${noteId}`);
//       setNotes(notes.filter(note => note._id !== noteId));
//       // window.location.reload();
//     } catch (error) {
//       console.error('Error deleting note:', error);
//     }
//   };

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
//       {notes.map(note => (
//         <Note
//           key={note._id}
//           title={note.title}
//           content={note.content}
//           date={extractTime(note.updatedAt)}
//           handleDelNote={() => handleDeleteNote(note._id)}
//         />
//       ))}

//       <div className='card-body bg-blue-200 rounded-lg p-4 min-h-44 flex flex-col justify-between whitespace-pre-wrap'>
//         <h2 className='card-title'>
//           <input className='focus:outline-none bg-inherit'
//             type="text" value={newNoteTitle} onChange={e => setNewNoteTitle(e.target.value)} placeholder="Enter note title"
//             />
//         </h2>

//         <p>
//           <textarea className='resize-none focus:outline-none bg-inherit'
//             value={newNoteContent} onChange={e => setNewNoteContent(e.target.value)}
//             placeholder="Enter note content"
//           />
//         </p>
//         <button className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
//       </div>
//     </div>
    
//   );
// };

// export default NoteList;


// return (
//     <div>
//       <ul>
//         {notes.map(note => (
//           <li key={note._id}>
//             <div className="cadi w-96 bg-white shadow-xl m-1">
//               <div className="card-body">
//                 <h2 className="card-title text-cyan-950">{note.title}</h2>
//                 <p className="text-cyan-800">{note.content}</p>
//                 <div className="card-actions justify-end">
//                   <button className="btn btn-primary bg-sky-500 text-white">Save</button>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );