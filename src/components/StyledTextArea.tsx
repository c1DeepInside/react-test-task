import { Box, SxProps, TextField } from '@mui/material';
import { ReactNode, useRef } from 'react';

type Props = {
  sxProps?: SxProps;
  label?: ReactNode;
  getTags?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textContent?: string;
};

const StyledTextArea = ({ sxProps, label, getTags, textContent }: Props) => {
  const text = useRef<HTMLDivElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    text.current!.innerHTML = e.target.value.replace(
      /(^#[а-я\w]+| #[а-я\w]+|\n#[а-я\w]+)/gi,
      '<span style="color: #8b00ff">$&</span>'
    );
    if (getTags) {
      getTags(e);
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        onChange={handleChange}
        multiline={true}
        label={label}
        fullWidth
        value={textContent}
        margin="none"
        InputProps={{
          sx: {
            ...{
              fontWeight: '500',
              lineHeight: 1,
              p: '14px',
              color: 'transparent',
              caretColor: 'black',
              position: 'relative',
              zIndex: '5',
            },
            ...sxProps,
          },
        }}
      />
      <Box
        ref={text}
        component={'div'}
        contentEditable
        sx={{
          ...{
            whiteSpace: 'pre-wrap',
            fontWeight: '500',
            lineHeight: 1,
            fontFamily: 'Montserrat',
            display: 'inline',
            pointerEvents: 'none',
            position: 'absolute',
            p: '14px',
            top: '0',
            left: '0',
            zIndex: '1',
            maxWidth: '100%',
          },
          ...sxProps,
        }}
      >
        {textContent}
      </Box>
    </Box>
  );
};

export default StyledTextArea;
