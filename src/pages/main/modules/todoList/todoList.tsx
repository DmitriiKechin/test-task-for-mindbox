import { FC, useState } from 'react';
import { Item } from './components/item';
import { ControlPanel } from './components/controlPanel';
import { Box } from '@mui/material';
import { useTodoStore } from '../../stores/todo';

export const TodoList: FC = () => {
  const tasks = useTodoStore((store) => store.tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  return (
    <>
      <Box>
        {filteredTasks.map((task) => (
          <Item
            key={task.id}
            id={task.id}
            isComplete={task.isComplete}
            label={task.label}
          />
        ))}
      </Box>
      <ControlPanel setFilteredTasks={setFilteredTasks} />
    </>
  );
};
