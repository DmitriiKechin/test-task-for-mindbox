import { Fab, Stack, TextField } from '@mui/material';
import { FC, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTodoStore } from '../../stores/todo';

export const Input: FC = () => {
  const [value, setValue] = useState('');
  const addTask = useTodoStore((state) => state.addTask);

  const clickHandler = () => {
    addTask(value);
    setValue('');
  };

  return (
    <Stack direction="row" spacing={5} justifyContent={'center'}>
      <TextField
        placeholder="add an items"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        variant="standard"
        sx={{ flex: '1 1 100px' }}
      />
      <Fab size="medium" color="success" onClick={clickHandler}>
        <AddIcon />
      </Fab>
    </Stack>
  );
};
