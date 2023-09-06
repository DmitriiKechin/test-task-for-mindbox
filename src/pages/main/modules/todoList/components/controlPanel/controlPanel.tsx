import { FC, useCallback, useEffect, useState } from 'react';
import { useTodoStore } from '../../../../stores/todo';
import { ControlPanelProps, FilterValue } from './controlPanel.types';
import { ControlPanelElement } from './controlPanelElement';

export const ControlPanel: FC<ControlPanelProps> = ({ setFilteredTasks }) => {
  const tasks = useTodoStore((store) => store.tasks);

  const [filterValue, setFilterValue] = useState<FilterValue>('all');

  const buttonGroupHandler = useCallback(
    (
      event: React.MouseEvent<HTMLElement>,
      newFilterValue: FilterValue | null
    ) => {
      if (newFilterValue === null) {
        return;
      }
      setFilterValue(newFilterValue);
    },
    []
  );

  useEffect(() => {
    switch (filterValue) {
      case 'all':
        setFilteredTasks(tasks);
        break;

      case 'active':
        setFilteredTasks(tasks.filter((task) => !task.isComplete));
        break;

      case 'completed':
        setFilteredTasks(tasks.filter((task) => task.isComplete));
        break;
    }
  }, [filterValue, setFilteredTasks, tasks]);

  return (
    <ControlPanelElement
      buttonGroupHandler={buttonGroupHandler}
      filterValue={filterValue}
    />
  );
};
