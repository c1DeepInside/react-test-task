import { Box, Button, Container } from '@mui/material';
import StyledTextArea from './StyledTextArea';
import BorderColorRoundedIcon from '@mui/icons-material/Create';

const Main = () => {
  return (
    <main>
      <Container maxWidth="sm">
        <Box sx={{ pt: '5px' }}>
          <StyledTextArea label="Write your note!" sxProp={{ fontSize: 24 }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            sx={{ fontSize: '14px' }}
            variant="contained"
            startIcon={<BorderColorRoundedIcon />}
          >
            Create a note
          </Button>
        </Box>
      </Container>
    </main>
  );
};

export default Main;
