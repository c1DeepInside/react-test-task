import { Box, Chip, Divider } from '@mui/material';
import { useAppSelector } from '../hooks/redux';
import Note from './Note';

const NotesBlock = () => {
  const notes = useAppSelector((state) => state.notes.notes);

  return (
    <>
      <Divider sx={{ mt: '20px' }}>
        <Chip
          variant="outlined"
          label="Your Notes"
          sx={{ fontWeight: '500', fontSize: 18, opacity: '0.8' }}
        />
      </Divider>
      <Box sx={{ mt: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {notes.map((note) => (
          <Note note={note} key={note.date} />
        ))}
      </Box>
    </>
  );
};

export default NotesBlock;
