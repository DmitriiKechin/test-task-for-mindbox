export interface Task {
  id: number;
  label: string;
  isComplete: boolean;
}

export interface TodoState {
  tasks: Task[];
  taskNotCompleted: number;
  addTask: (label: string) => void;
  updateTask: (id: number) => void;
  clearCompleted: () => void;
}
