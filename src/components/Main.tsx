import { Box, Container } from '@mui/material';
import EditBlock from './EditBlock';

const Main = () => {
  return (
    <Box component={'main'}>
      <Container maxWidth="sm">
        <EditBlock />
      </Container>
    </Box>
  );
};

export default Main;
