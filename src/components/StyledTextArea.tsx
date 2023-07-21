import { SxProps, TextField } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  sxProp: SxProps;
  label?: ReactNode;
};

const StyledTextArea = ({ sxProp, label }: Props) => {
  return (
    <TextField
      multiline={true}
      label={label}
      fullWidth
      margin="normal"
      InputProps={{ sx: { ...sxProp, ...{ fontWeight: '500', lineHeight: 1 } } }}
    />
  );
};

export default StyledTextArea;
