import React from 'react';
import Card from './Cards';
import InputBtn from './InputBtn';
import InputCardBox from './InputCardBox';
import Title from './Title';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type CardType = {
	listTitle: string,
	listId: number,
	cardId: number,
}
type propType = {
	cardItem: CardType[] | [],
	cardId: number,
	cardTitle: string,
	index: number
}


const CardContainer: React.FC<propType> = ({ cardItem, cardId, cardTitle, index }: propType) => {
	// console.log(cardId);
	
	return (
		<>
			<div className="mr-4 p-3 my-2 h-[1%] w-[18rem] min-w-[18rem]  bg-purple-300 rounded">
				<Title title={cardTitle} cardId={cardId} cardIndex={index} />
				{
					cardItem.map((item, indexx) => {
						return <Card key={item.listId} title={item.listTitle} cardId={cardId} listId={item.listId} cardIndex={index} index={indexx} /> 
					})
				}
				
				<InputCardBox cardId={cardId} index={index} />
			</div>
		</>
	)
}

export default CardContainer