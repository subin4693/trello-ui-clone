import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


type cardItem = {
	title: string,
	cardId: string,
	index: number
}

const Cards: React.FC<cardItem> = ({ title, cardId, index }: cardItem) => {
	return (
		<div className="bg-gray-200 my-1 p-2 rounded  text-gray-900">
			<h1>{title}</h1>
		</div>
	);
}

export default Cards;