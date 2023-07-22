import { Box, Button, Typography } from '@mui/material';
import StyledTextArea from './StyledTextArea';
import { useState } from 'react';
import BorderColorRoundedIcon from '@mui/icons-material/Create';

const EditBlock = () => {
  const [currentTags, setCurrentTags] = useState<string[] | null>(null);

  const getTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTags(e.target.value.match(/(^#[а-я\w]+| #[а-я\w]+|\n#[а-я\w]+)/gi));
  };

  const showCurrentTags = (): string[] | undefined => {
    return currentTags?.map((tag, i): string => {
      return i < currentTags.length - 1 ? `${tag}, ` : tag;
    });
  };

  return (
    <>
      <Box sx={{ mt: '15px' }}>
        <StyledTextArea label="Write your note!" sxProps={{ fontSize: 26 }} getTags={getTags} />
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
        >
          Create a note
        </Button>
      </Box>
      {currentTags && (
        <Typography
          sx={{
            mt: '5px',
            fontSize: 16,
            flexGrow: '1',
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
