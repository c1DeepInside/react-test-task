import { Box, Container } from '@mui/material';
import EditBlock from './EditBlock';
import NotesBlock from './NotesBlock';

const Main = () => {
  return (
    <Box component={'main'}>
      <Container maxWidth="sm">
        <EditBlock />
        <NotesBlock />
      </Container>
    </Box>
  );
};

export default Main;
