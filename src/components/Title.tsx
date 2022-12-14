import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { changeCardTitle, deleteCard } from '../features/NotesSlice';


type propType = {
	title: string;
	cardId: number;
	cardIndex: number;
	
}

const Title: React.FC<propType> = ({ title, cardId, cardIndex }: propType) => {
	const [changeTitle, setChangeTitle] = useState<boolean>(false);
	const [inputVal, setInputVal] = useState<string>(title);

	const dispatch = useDispatch();

	const handleShowTitle = () => {
		setChangeTitle(prev => !prev);
		dispatch(changeCardTitle({ inputVal, cardIndex, cardId }))
	}

	const handleDelete = () => {
		dispatch(deleteCard({ cardIndex, cardId }));
	}
	return (
		<div className="flex p-1 ">
			<div className="min-h-[1.8rem]">
				{
					changeTitle ? (<TextareaAutosize minRows={1} autoFocus onBlur={handleShowTitle} value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="outline-0 resize-none w-[15rem] rounded px-1" />)
						: 
						(<h1 className="font-bold  cursor-pointer w-[15rem]" onClick={handleShowTitle}>{title && title}</h1>)
				}
			</div>
			<button onClick={handleDelete}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
			</button>

		</div>
	)
}

export default Title;