import { Box } from '@mui/material';
import { INote } from '../interfaces/note';
import StyledTextArea from './StyledTextArea';

type Props = {
  note: INote;
};

const Note = ({ note }: Props) => {
  return (
    <Box>
      <StyledTextArea label={new Date(note.date).toLocaleString()} sxProps={{ fontSize: 24 }} />
    </Box>
  );
};

export default Note;
