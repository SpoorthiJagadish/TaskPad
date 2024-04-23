import { useState, useEffect } from 'react';
import axios from 'axios';
import { BiLogOut } from 'react-icons/bi'

import useLogout from '../hooks/useLogout';
import { extractTime } from '../utils/extractTime.js';
import Note from './Note.jsx';

const NoteList = () => {
  const { logout } = useLogout();

  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

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

  useEffect(() => {
    setFilteredNotes(
      notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [notes, searchQuery]);

  const handleAddNote = async () => {
    try {
      const response = await axios.post('/api/taskpad/notes', {
        title: newNoteTitle,
        content: newNoteContent
      });
      setNotes([...notes, response.data]);
      setNewNoteTitle('');
      setNewNoteContent('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`/api/taskpad/notes/${noteId}`);
      setNotes(notes.filter(note => note._id !== noteId));
      // window.location.reload();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <form className="flex items-centre gap-2 m-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered rounded-full w-full"
          placeholder="Search by title..."
        />

        <button type="submit" className="btn btn-circle bg-red-500 text-white">
            <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout} />
        </button>
      </form>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {filteredNotes.map(note => (
        <Note
          key={note._id}
          title={note.title}
          content={note.content}
          date={extractTime(note.updatedAt)}
          handleDelNote={() => handleDeleteNote(note._id)}
        />
      ))}

      <div className='card-body bg-blue-200 rounded-lg p-4 min-h-44 flex flex-col justify-between whitespace-pre-wrap'>
        <h2 className='card-title'>
          <input className='focus:outline-none bg-inherit'
            type="text" value={newNoteTitle} onChange={e => setNewNoteTitle(e.target.value)} placeholder="Enter note title"
            />
        </h2>

        <p>
          <textarea className='resize-none focus:outline-none bg-inherit'
            value={newNoteContent} onChange={e => setNewNoteContent(e.target.value)}
            placeholder="Enter note content"
          />
        </p>
        <button className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
</div>    
  );
};

export default NoteList;