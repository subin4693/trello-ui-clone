import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const apps = () => {

	const columns = [
		"text 1",
		"text 2",
		"text 3",
		"text 4"
	]
	return <div>
		<DragDropContext onDropEnd={res => console.log(res)}>
			{
				
				<Droppable droppableId={"" + Math.random()} >
					{
						(provided, snapshot) => {
							return (
								<div {...provided.droppaleProps}
									ref={provided.innerRef}
											
								>
									{
										columns.map((values, index) => {
											return (
												<Draggable key={index}
													draggableId={"" + index}
													index={index}
												>
													{
														(provided, snapshot) => {
															return (
																<div ref={provided.innerRef}
																	{...provided.draggableProps}
																	{...provided.dragHandleProps}
																	className="bg-red-500 m-4"
																>
																	{values}

																</div>
															)
														}
													}
												</Draggable>

											)
										})
									}
								</div>
							)
						}
					}
				</Droppable>
				
			}
		</DragDropContext>
	</div>
}
export default apps;