import { configureStore } from '@reduxjs/toolkit'
import NotesSlice from '../features/NotesSlice';

const store: any = configureStore({
	reducer: {
		Notes: NotesSlice,
	},
})

export default store;

