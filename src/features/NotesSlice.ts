import { createSlice } from '@reduxjs/toolkit';

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
				cardId: 2000,
				lists: [],
			}
			state.allCards.push(newCard);
			console.log(state.allCards)

		},
		deleteCard: () => {},
		changeCardTitle: () => {},
		addNewNote: () => {},
		deleteNote: () => {},
		changeNote: () => {},
	}
});


export const { addNewCard, deleteCard, changeCardTitle, addNewNote, deleteNote, changeNote } = NotesSlice.actions;
export default NotesSlice.reducer; 


