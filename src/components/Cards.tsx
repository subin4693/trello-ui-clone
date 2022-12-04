import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { deleteNote, changeNote } from '../features/NotesSlice';

type cardItem = {
	title: string;
	cardId: number;
	index: number;
	cardIndex: number;
	listId: number
}

const Cards: React.FC<cardItem> = ({ title, cardId, index, cardIndex, listId }: cardItem) => {

	const [edit, setEdit] = useState<boolean>(true);
	const [updateText, setUpdateText] = useState<string>(title);
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteNote({ cardIndex, index, cardId, listId }))
	}
	const handleEdit = () => {
		setEdit((prev) => !prev);
		dispatch(changeNote({ cardIndex, index, updateText }));
	}

	return (                 
		<div className="bg-gray-200 my-1 p-2 rounded  text-gray-900  group ">
			{edit ? (<div className="flex justify-between">
				<h1 className="w-full" onClick={handleEdit}>{title}</h1>
				<button className="hidden group-hover:inline" onClick={handleDelete}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
					</svg>
				</button ></div>

			) 
				: 
				(<TextareaAutosize autoFocus value={updateText} onChange={(e) => setUpdateText(e.target.value)} className="w-full resize-none rounded outline-none" onBlur={handleEdit} />)
			}
			
		</div >
	);
}

export default Cards;