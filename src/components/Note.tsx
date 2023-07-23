import { Box, Button } from '@mui/material';
import { INote } from '../interfaces/note';
import StyledTextArea from './StyledTextArea';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useAppDispatch } from '../hooks/redux';
import { changeNoteStore, removeNoteStore } from '../store/noteSlice';
import { useState } from 'react';

type Props = {
  note: INote;
};

const Note = ({ note }: Props) => {
  const dispatch = useAppDispatch();
  const [currentText, setCurrentText] = useState(note.text);

  const getText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };

  const removeNote = () => {
    dispatch(removeNoteStore(note));
  };

  const saveNote = () => {
    dispatch(changeNoteStore({ text: currentText, date: note.date }));
  };

  return (
    <Box>
      <StyledTextArea
        label={new Date(note.date).toLocaleString()}
        sxProps={{ fontSize: 24 }}
        note={note}
        getText={getText}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '5px', gap: '10px' }}>
        {currentText !== note.text && (
          <Button
            variant="contained"
            onClick={saveNote}
            startIcon={<SaveIcon />}
            sx={{ fontSize: 14 }}
          >
            save
          </Button>
        )}

        <Button
          variant="contained"
          onClick={removeNote}
          startIcon={<DeleteIcon />}
          sx={{ fontSize: 14 }}
        >
          delete
        </Button>
      </Box>
    </Box>
  );
};

export default Note;
