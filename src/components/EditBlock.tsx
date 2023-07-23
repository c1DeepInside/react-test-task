import { Box, Button, Typography } from '@mui/material';
import StyledTextArea from './StyledTextArea';
import { useRef, useState } from 'react';
import BorderColorRoundedIcon from '@mui/icons-material/Create';
import { useAppDispatch } from '../hooks/redux';
import { addNoteStore } from '../store/noteSlice';
import { RefType } from '../interfaces/note';
import { regTag } from '../utils/regexp';

const EditBlock = () => {
  const [currentTags, setCurrentTags] = useState<string[] | null>(null);
  const [currentText, setCurrentText] = useState('');
  const dispatch = useAppDispatch();

  const childRef = useRef<RefType>(null);

  const getText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
    setCurrentTags(e.target.value.match(regTag));
  };

  const showCurrentTags = (): string[] | undefined => {
    return currentTags?.map((tag, i): string => {
      return i < currentTags.length - 1 ? `${tag}, ` : tag;
    });
  };

  const addNote = () => {
    dispatch(addNoteStore({ text: currentText, date: Date.now() }));
    setCurrentText('');
    childRef.current?.clearText();
    setCurrentTags(null);
  };

  return (
    <>
      <Box sx={{ mt: '20px' }}>
        <StyledTextArea
          label="Write your note!"
          sxProps={{ fontSize: 26 }}
          getText={getText}
          ref={childRef}
        />
      </Box>
      <Box
        sx={{
          mt: '5px',
        }}
      >
        <Button
          sx={{ fontSize: 14, flexShrink: '0', alignSelf: 'flex-start' }}
          variant="contained"
          startIcon={<BorderColorRoundedIcon />}
          onClick={addNote}
        >
          Create a note
        </Button>
      </Box>
      {currentTags && (
        <Typography
          sx={{
            mt: '5px',
            fontSize: 16,
            overflow: 'auto',
            color: 'primary.main',
            opacity: 0.8,
          }}
        >
          <span style={{ color: 'black' }}>Current tags: </span>
          {showCurrentTags()}
        </Typography>
      )}
    </>
  );
};

export default EditBlock;
