import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { INote } from '../interfaces/note';

type noteState = {
  notes: INote[];
};

const initialState: noteState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notesCards',
  initialState,
  reducers: {
    addNoteStore(state, action: PayloadAction<INote>) {
      state.notes.push(action.payload);
    },
    removeNote(state, action: PayloadAction<INote>) {
      state.notes.filter((note) => note.date !== action.payload.date);
    },
  },
});

export const { addNoteStore, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
