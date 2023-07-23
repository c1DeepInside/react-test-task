import { Box, Chip, Divider, Typography } from '@mui/material';
import { useAppSelector } from '../hooks/redux';
import Note from './Note';
import TagsBlock from './TagsBlock';
import { useMemo } from 'react';
import { INote } from '../interfaces/note';
import { regTag } from '../utils/regexp';

const NotesBlock = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const currentTags = useAppSelector((state) => state.notes.currentTags);

  const visibleNotes: INote[] = useMemo(() => {
    return currentTags.length !== 0
      ? notes.filter((note) => {
          const tags = note.text.match(regTag)?.map((a) => a.trim());
          return currentTags?.every((tag) => tags?.includes(tag));
        })
      : notes;
  }, [currentTags, notes]);

  return (
    <>
      <TagsBlock />
      <Divider sx={{ mt: '20px' }}>
        <Chip
          variant="outlined"
          label="Your Notes"
          sx={{ fontWeight: '500', fontSize: 18, opacity: '0.8' }}
        />
      </Divider>
      <Box sx={{ mt: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {visibleNotes.length !== 0 ? (
          visibleNotes.map((note) => <Note note={note} key={note.date} />)
        ) : (
          <Typography sx={{ fontWeight: '500', fontSize: 24, opacity: '0.7', textAlign: 'center' }}>
            No Notes
          </Typography>
        )}
      </Box>
    </>
  );
};

export default NotesBlock;
