import { act, renderHook } from '@testing-library/react';
import { useTodoStore } from './todo';

const defaultValue = [
  { id: 1, isComplete: false, label: 'Тестовое задание' },
  { id: 2, isComplete: true, label: 'Прекрасный код' },
  { id: 3, isComplete: false, label: 'Покрытие тестами' },
];

const initialStoreState = useTodoStore.getState();

describe('useTodoStore', () => {
  beforeEach(() => {
    useTodoStore.setState(initialStoreState, true);
  });

  it("value's initial value", () => {
    const { result } = renderHook(() => useTodoStore());
    expect(result.current.taskNotCompleted).toEqual(2);
    expect(result.current.tasks).toEqual(defaultValue);
  });

  it('adds a new task', () => {
    const { result } = renderHook(() => useTodoStore());
    expect(result.current.taskNotCompleted).toEqual(2);
    expect(result.current.tasks).toEqual(defaultValue);

    act(() => result.current.addTask('test'));
    const lastIndex = result.current.tasks.length - 1;

    expect(result.current.taskNotCompleted).toEqual(3);
    expect(result.current.tasks[lastIndex].isComplete).toEqual(false);
    expect(result.current.tasks[lastIndex].label).toEqual('test');
  });

  it('clearCompleted', () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => result.current.clearCompleted());
    const resultTasks = defaultValue.filter((task) => !task.isComplete);

    expect(result.current.taskNotCompleted).toEqual(2);
    expect(result.current.tasks).toEqual(resultTasks);
  });

  it('updateTask', () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => result.current.updateTask(1));
    defaultValue[0].isComplete = true;

    expect(result.current.taskNotCompleted).toEqual(1);
    expect(result.current.tasks).toEqual(defaultValue);

    act(() => result.current.updateTask(1));
    defaultValue[0].isComplete = false;

    expect(result.current.taskNotCompleted).toEqual(2);
    expect(result.current.tasks).toEqual(defaultValue);
  });
});
