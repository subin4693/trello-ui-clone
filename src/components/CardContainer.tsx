import React, { useState } from 'react';
import Card from './Cards';
import InputBtn from './InputBtn';
import InputBox from './InputBox';
import Title from './Title';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


type propType = {
	cardItem: {
		title: string,
		listId: string,
		cardId: string,
	}[],
	cardId: string
	cardTitle: string
	index?: number
}


const CardContainer: React.FC<propType> = ({ cardItem, cardId, cardTitle, index }: propType) => {
	const [openInput, setOpenInput] = useState<boolean>(false);
	return (
		<>
			<div className="mr-4 p-3 my-2 h-[1%] w-[18rem] min-w-[18rem]  bg-purple-300 rounded">
				<Title title={cardTitle} cardId={cardId} />
				{
					cardItem.map((item, index) => {
						return <Card key={item.listId} title={item.title} cardId={cardId} index={index} /> 
					})
				}
				{openInput ? (
					<InputBox placeholderTxt="Enter the title for this card..." cardId={cardId} index={index} setOpenInput={setOpenInput} btnTxt="Add card" />
				) : (
					<InputBtn btnTxt="Add a card" cardId={cardId} setOpenInput={setOpenInput} />)
				}
			</div>
		</>
	)
}

export default CardContainer