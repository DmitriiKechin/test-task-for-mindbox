import React, { FC, memo } from 'react';
import { ControlPanelElementProps } from './controlPanel.types';
import {
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useTodoStore } from '../../../../stores/todo';

export const ControlPanelElement: FC<ControlPanelElementProps> = memo(
  ({ buttonGroupHandler, filterValue }) => {
    const [taskNotCompleted, clearCompleted] = useTodoStore((store) => [
      store.taskNotCompleted,
      store.clearCompleted,
    ]);
    return (
      <Grid container spacing={2} alignItems="center" textAlign={'center'}>
        <Grid item xs={12}>
          <ToggleButtonGroup
            color="success"
            size="small"
            value={filterValue}
            exclusive
            onChange={buttonGroupHandler}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="active">Active</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            {taskNotCompleted} {taskNotCompleted > 1 ? 'items' : 'item'} left
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button size="small" color="success" onClick={clearCompleted}>
            Clear Completed
          </Button>
        </Grid>
      </Grid>
    );
  }
);
