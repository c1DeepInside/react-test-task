import { Box, SxProps, TextField } from '@mui/material';
import {
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { INote, RefType } from '../interfaces/note';
import { regTag } from '../utils/regexp';

type Props = {
  sxProps?: SxProps;
  label?: ReactNode;
  getText?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  note?: INote;
  error?: boolean;
};

const StyledTextArea = ({ sxProps, label, getText, note, error }: Props, ref?: Ref<RefType>) => {
  const [currentText, setCurrentText] = useState(note?.text);
  const textRef = useRef<HTMLDivElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
    textRef.current!.innerHTML = e.target.value.replace(
      regTag,
      '<span style="color: #8b00ff">$&</span>'
    );
    if (getText) {
      getText(e);
    }
  };

  useEffect(() => {
    if (note) {
      textRef.current!.innerHTML = note.text.replace(
        regTag,
        '<span style="color: #8b00ff">$&</span>'
      );
    }
  }, [note]);

  const clearText = () => {
    setCurrentText('');
    textRef.current!.innerHTML = '';
  };

  useImperativeHandle(ref, () => ({ clearText }));

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        onChange={handleChange}
        multiline={true}
        label={!error ? label : 'Write something!'}
        value={currentText}
        fullWidth
        error={error}
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
        ref={textRef}
        component={'div'}
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
      ></Box>
    </Box>
  );
};

export default forwardRef(StyledTextArea);
