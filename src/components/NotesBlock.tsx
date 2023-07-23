import { Box, Chip, Divider, Typography } from '@mui/material';
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
        {notes.length !== 0 ? (
          notes.map((note) => <Note note={note} key={note.date} />)
        ) : (
          <Typography sx={{ fontWeight: '500', fontSize: 24, opacity: '0.7', textAlign: 'center' }}>
            Create your notes in the text field above
          </Typography>
        )}
      </Box>
    </>
  );
};

export default NotesBlock;
