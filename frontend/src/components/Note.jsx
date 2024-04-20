import { MdDeleteForever } from 'react-icons/md';

const Note = ({title, content,  date, handleDelNote}) => { 
	return (
		<div className='card-body bg-yellow-200 rounded-lg p-4 min-h-44 flex flex-col justify-between whitespace-pre-wrap'>
			<h2 className='card-title'>{title}</h2>
      <p className="text-cyan-800">{content}</p>
			<div className='note-footer flex items-center justify-between'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={handleDelNote}
					className='delete-icon  cursor-pointer'
					size='1.3em'
				/>  
			</div>
		</div>
	);
};

export default Note;


// // import { useAuthContext } from '../context/AuthContext';

// const Note = () => {
//   // const {authUser} = useAuthContext();
//   // const myNote = note.noteId === authUser._id;
//   return (
//     <div className="card w-96 bg-white shadow-xl m-1">
//       <div className="card-body">
//         <h2 className="card-title text-cyan-950"></h2>
//         <p className="text-cyan-800"></p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary bg-sky-500 text-white">Save</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Note

