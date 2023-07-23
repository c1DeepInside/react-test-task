import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { INote } from '../interfaces/note';
import { regTag } from '../utils/regexp';

type noteState = {
  notes: INote[];
  tags: string[];
  currentTags: string[];
};

const initialState: noteState = {
  notes: [],
  tags: [],
  currentTags: [],
};

const findTags = (notes: INote[]): string[] => {
  const matchTags = notes.reduce((res, note): string => `${res} ${note.text}`, ' ').match(regTag);
  let tags: string[] = [];
  if (matchTags) {
    tags = [...new Set([...matchTags])];
  }
  return tags.map((tag): string => {
    return tag.trim();
  });
};

const notesSlice = createSlice({
  name: 'notesCards',
  initialState,
  reducers: {
    addNoteStore(state, action: PayloadAction<INote>) {
      state.notes.push(action.payload);
      state.tags = findTags(state.notes);
      localStorage.setItem('notesStorage', JSON.stringify(state.notes));
    },
    addNotesStore(state, action: PayloadAction<INote[]>) {
      state.notes = action.payload;
    },
    removeNoteStore(state, action: PayloadAction<INote>) {
      state.notes = state.notes.filter((note) => note.date !== action.payload.date);
      state.tags = findTags(state.notes);
      localStorage.setItem('notesStorage', JSON.stringify(state.notes));
    },
    changeNoteStore(state, action: PayloadAction<INote>) {
      state.notes = state.notes.map(
        (note): INote =>
          note.date === action.payload.date ? { text: action.payload.text, date: Date.now() } : note
      );
      state.tags = findTags(state.notes);
      localStorage.setItem('notesStorage', JSON.stringify(state.notes));
    },
    setCurrentTagsStore(state, action: PayloadAction<string[]>) {
      state.currentTags = action.payload;
    },
    updateTagsStore(state) {
      state.tags = findTags(state.notes);
    },
  },
});

export const {
  addNoteStore,
  addNotesStore,
  removeNoteStore,
  changeNoteStore,
  setCurrentTagsStore,
  updateTagsStore,
} = notesSlice.actions;

export default notesSlice.reducer;
