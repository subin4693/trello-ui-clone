import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

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
			const uid = uuidv4();
			const newCard = {
				cardTitle: action.payload,
				cardId: uid,
				lists: [],
			}
			// state.allCards = [...state.allCards, newCard];
			setDoc(doc(db, "cards", uid), {
				...newCard
			})
		},

		deleteCard: (state, { payload }) => {
			const { cardIndex, cardId } = payload;
			// console.log(payload)
			state.allCards.splice(cardIndex, 1);
			deleteDoc(doc(db, "cards", cardId));


		},

		addNewNote: (state, { payload }) => {// need to change meny thinks after do all the stuffs
			const { cardTitle, index, cardId } = payload;
			const newCard = {
				listTitle: cardTitle,
				listId: uuidv4(),
				cardId: cardId,
			};
			// state.allCards[index].lists.push(newCard)
			const updateItem = doc(db, "cards", cardId);
			updateDoc(updateItem, { lists: [...state.allCards[index].lists, newCard] })

		},

		deleteNote: (state, { payload }) => {
			const { cardIndex, index, cardId, listId } = payload;
			// console.log(cardIndex)
			// console.log(index);
			// state.allCards
			// state.allCards[cardIndex].lists.splice(index, 1)
			const deleteItem = doc(db, "cards", cardId);		
			updateDoc(deleteItem, { lists: state.allCards[cardIndex].lists.splice(index, 1) })
		},

		changeCardTitle: (state, { payload }) => {
			const { cardIndex, inputVal, cardId } = payload;
			// state.allCards[cardIndex].cardTitle = inputVal;
			const changeTitle = doc(db, "cards", cardId);
			updateDoc(changeTitle, { cardTitle: inputVal })

			console.log("working");


			console.log(cardIndex);
		},
		changeNote: (state, { payload }) => {
			console.log(payload);
			const { cardIndex, index, updateText, cardId } = payload;
			// console.ll
			state.allCards[cardIndex].lists[index].listTitle = updateText;
			const changeNoteTitle = doc(db, "cards", cardId);
			updateDoc(changeNoteTitle, { lists: state.allCards[cardIndex].lists })

		},
		setAllCardsFromFb: (state, { payload }) => {
			// console.log(payload);
			state.allCards.push(payload);
		}
	}
});


export const { addNewCard, deleteCard, changeCardTitle, addNewNote, deleteNote, changeNote, setAllCardsFromFb } = NotesSlice.actions;
export default NotesSlice.reducer; 


