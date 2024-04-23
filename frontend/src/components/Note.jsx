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