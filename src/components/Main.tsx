import { Box, Button, Container } from '@mui/material';
import StyledTextArea from './StyledTextArea';
import BorderColorRoundedIcon from '@mui/icons-material/Create';

const Main = () => {
  return (
    <Box component={'main'}>
      <Container maxWidth="sm">
        <Box sx={{ mt: '20px' }}>
          <StyledTextArea label="Write your note!" sxProps={{ fontSize: 26 }} />
        </Box>
        <Box sx={{ mt: '5px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ fontSize: 14 }} variant="contained" startIcon={<BorderColorRoundedIcon />}>
            Create a note
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
