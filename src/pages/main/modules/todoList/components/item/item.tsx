import React, { FC } from 'react';
import { ItemProps } from './item.types';
import { Checkbox, Divider, FormControlLabel } from '@mui/material';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useTodoStore } from '../../../../stores/todo';

export const Item: FC<ItemProps> = ({ isComplete, label, id }) => {
  const changeHandler = useTodoStore((store) => store.updateTask);
  return (
    <>
      <FormControlLabel
        label={label}
        sx={
          isComplete
            ? { textDecoration: 'line-through', color: 'text.disabled' }
            : {}
        }
        control={
          <Checkbox
            checked={isComplete}
            onChange={() => {
              changeHandler(id);
            }}
            icon={<Brightness1OutlinedIcon />}
            checkedIcon={<CheckCircleRoundedIcon color="success" />}
          />
        }
      />
      <Divider />
    </>
  );
};
