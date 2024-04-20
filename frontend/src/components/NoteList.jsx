import { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './Note.jsx';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/taskpad/notes'); // Adjust URL as per your backend route
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='grid grid-cols-auto-fill gap-4'>
      {notes.map(note => (
        <Note title={note.title} content={note.content} key={note._id} />
      ))}
    </div>
  );
};

export default NoteList;


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