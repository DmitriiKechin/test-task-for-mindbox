import { create } from 'zustand';
import { TodoState } from './todo.types';

export const useTodoStore = create<TodoState>((set) => ({
  tasks: [
    { id: 1, isComplete: false, label: 'Тестовое задание' },
    { id: 2, isComplete: true, label: 'Прекрасный код' },
    { id: 3, isComplete: false, label: 'Покрытие тестами' },
  ],

  taskNotCompleted: 2,

  addTask: (label) => {
    if (!label) {
      return;
    }

    set((store) => ({
      tasks: [...store.tasks, { id: Date.now(), isComplete: false, label }],
      taskNotCompleted: store.taskNotCompleted + 1,
    }));
  },

  clearCompleted: () =>
    set((store) => ({ tasks: store.tasks.filter((task) => !task.isComplete) })),

  updateTask: (id) =>
    set((store) => {
      const index = store.tasks.findIndex((task) => task.id === id);

      if (index < 0) {
        return {};
      }

      const tasks = store.tasks;

      //invert the value isComplete
      tasks[index].isComplete = !tasks[index].isComplete;

      return {
        tasks: [...tasks],
        //find the number of outstanding tasks
        taskNotCompleted: tasks[index].isComplete
          ? store.taskNotCompleted - 1
          : store.taskNotCompleted + 1,
      };
    }),
}));
