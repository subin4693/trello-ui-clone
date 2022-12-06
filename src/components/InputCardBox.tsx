import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { addNewNote } from '../features/NotesSlice';

type PropType = {
	cardId: number;
	index: number;
}

const InputCardBox: React.FC<PropType> = ({ cardId, index }: PropType) => {
	const [openInput, setOpenInput] = useState<boolean>(true);
	const [cardTitle, setCardTitle] = useState<string>("");

	const dispatch = useDispatch();
	const handleClose = () => {
		setOpenInput(prev => !prev)
		if (cardTitle) {
			dispatch(addNewNote({ cardTitle, index, cardId }))
		}
		setCardTitle("");
	}


	return (<>
		{
			openInput ? (<button className="bg-red-100 w-full text-gray-600 text-left p-1 rounded" onClick={handleClose}>
				+add card
			</button>) : (<div className="mt-1">
				<TextareaAutosize 
					autoFocus
					minRows={2} 
					placeholder="Enter a title for this card" className="w-full p-1  text-gray-900 outline-0 rounded resize-none" 
					onBlur={handleClose}
					onChange={(e) => setCardTitle(e.target.value)}
				/>
				<button className="bg-blue-500 px-2 py-1 rounded text-white">
					Add Card
				</button>
			</div>)
		}
	</>
	)
}

export default InputCardBox