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
    removeNoteStore(state, action: PayloadAction<INote>) {
      state.notes = state.notes.filter((note) => note.date !== action.payload.date);
    },
    changeNoteStore(state, action: PayloadAction<INote>) {
      state.notes = state.notes.map(
        (note): INote =>
          note.date === action.payload.date ? { text: action.payload.text, date: Date.now() } : note
      );
    },
  },
});

export const { addNoteStore, removeNoteStore, changeNoteStore } = notesSlice.actions;

export default notesSlice.reducer;
