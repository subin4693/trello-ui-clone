import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { changeCardTitle } from '../features/NotesSlice';


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
		dispatch(changeCardTitle({ inputVal, cardIndex }))
	}
	return (
		<div className="flex p-1 ">
			<div className="min-h-[1.8rem]">
				{
					changeTitle ? (<TextareaAutosize minRows={1} autoFocus onBlur={handleShowTitle} value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="outline-0 resize-none w-[15rem] rounded px-1" />)
						: 
						(<h1 className="font-bold  cursor-pointer w-[15rem]" onClick={handleShowTitle}>{title}</h1>)
				}
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
			</svg>

		</div>
	)
}

export default Title;