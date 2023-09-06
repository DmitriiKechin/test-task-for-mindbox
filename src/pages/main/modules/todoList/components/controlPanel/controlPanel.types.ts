import { Task } from '../../../../stores/todo';

export interface ControlPanelProps {
  setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface ControlPanelElementProps {
  buttonGroupHandler: (
    event: React.MouseEvent<HTMLElement>,
    newFilterValue: FilterValue | null
  ) => void;

  filterValue: FilterValue;
}

export type FilterValue = 'all' | 'active' | 'completed';
