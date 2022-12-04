import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type initialStateType = {
	allCards: 
	{
		cardTitle: string
		cardId: number,
		lists: 
		{
			listTitle: string,
			listId: number,
			cardId: number,
		}[]		
	}[]
	
}

const initialState: initialStateType = {
	allCards: [
		// {
		// 	cardTitle: "I am card title",
		// 	cardId: 1000,
		// 	lists: [
		// 		{
		// 			listTitle: "I am list title",
		// 			listId: 2000,
		// 			cardId: 1000
		// 		}
		// 	]
		// },

	]
};

const NotesSlice = createSlice({
	name: "Notes",
	initialState,
	reducers: {
		addNewCard: (state, action) => {
			
			const newCard = {
				cardTitle: action.payload,
				cardId: uuidv4(),
				lists: [],
			}
			state.allCards = [...state.allCards, newCard];
			// console.log(newCard)

		},


		addNewNote: (state, { payload }) => {
			const { cardTitle, index } = payload;

			state.allCards[index].lists.push({
				listTitle: cardTitle,
				listId: uuidv4(),
				cardId: uuidv4(),
			})
				
		},

		deleteNote: (state, { payload }) => {
			const { cardIndex, index, cardId, listId } = payload;
			// console.log(cardIndex)
			// console.log(index);
			// state.allCards
			state.allCards[cardIndex].lists.splice(index, 1);
		},

		changeCardTitle: (state, { payload }) => {
			const { cardIndex, inputVal } = payload;
			state.allCards[cardIndex].cardTitle = inputVal
			// console.log(cardIndex);
		},
		deleteCard: (state, { payload }) => {
			state.allCards.splice(payload, 1);

		},
		changeNote: (state, { payload }) => {
			console.log(payload);
			const { cardIndex, index, updateText } = payload;
			// console.ll
			state.allCards[cardIndex].lists[index].listTitle = updateText;
		},
	}
});


export const { addNewCard, deleteCard, changeCardTitle, addNewNote, deleteNote, changeNote } = NotesSlice.actions;
export default NotesSlice.reducer; 


