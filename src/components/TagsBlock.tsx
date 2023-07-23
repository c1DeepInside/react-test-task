import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useState } from 'react';
import { setCurrentTagsStore } from '../store/noteSlice';

const TagsBlock = () => {
  const tags = useAppSelector((state) => state.notes.tags);
  const dispatch = useAppDispatch();

  const [currentTags, setCurrentTags] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof currentTags>) => {
    const {
      target: { value },
    } = event;
    setCurrentTags(typeof value === 'string' ? value.split(',') : value);
    dispatch(setCurrentTagsStore(typeof value === 'string' ? value.split(',') : value));
  };
  return (
    <Box>
      {tags.length !== 0 && (
        <FormControl fullWidth sx={{ mt: '20px' }}>
          <InputLabel>Tags filter</InputLabel>
          <Select
            multiple
            value={currentTags}
            onChange={handleChange}
            input={<OutlinedInput label="Tags filter" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default TagsBlock;
