import React, { useState, Dispatch, SetStateAction } from 'react'
import TextareaAutosize from 'react-textarea-autosize';

import { useDispatch } from 'react-redux';
import { addNewCard } from '../features/NotesSlice';

type propType = {
	setOpenInput: Dispatch<SetStateAction<boolean>>,
	cardId?: number
	index?: number 
}

const InputBox: React.FC<propType> = ({ setOpenInput, cardId, index }: propType) => {
	const [title, setTitle] = useState<string>("");
	const dispatch = useDispatch();
	

	const handleClose = () => {
		setOpenInput(prev => !prev)
		if (title) {
			dispatch(addNewCard(title))
		}
	}
	return (
		<div className="bg-purple-300 p-2 max-w-[18rem] rounded mt-2 h-[1%]">
			<TextareaAutosize className="w-full py-2 px-1  text-gray-900 outline-0 rounded resize-none " 
				autoFocus
				minRows={1} 
				placeholder="Enter list title" 
				onBlur={handleClose}
				onChange={e => setTitle(e.target.value)} 
			/>
			<button className="bg-blue-500 px-2 py-1 rounded text-white" onClick={handleClose}>
				Add List
			</button>
		</div>
	)
}

export default InputBox