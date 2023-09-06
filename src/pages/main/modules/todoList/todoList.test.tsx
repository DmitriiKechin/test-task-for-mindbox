import { render, screen } from '@testing-library/react';
import { TodoList } from './todoList';
import userEvent from '@testing-library/user-event';

const renderTodoList = () => {
  return render(<TodoList />);
};

describe('TodoList component', () => {
  it('render buttons', () => {
    renderTodoList();

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Active' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Completed' })
    ).toBeInTheDocument();
  });

  it('render tasks', () => {
    renderTodoList();

    expect(
      screen.getByRole('checkbox', { name: 'Тестовое задание' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'Покрытие тестами' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'Прекрасный код' })
    ).toBeInTheDocument();
  });

  it('shows active tasks', async () => {
    renderTodoList();

    await userEvent.click(screen.getByRole('button', { name: 'Active' }));

    expect(
      screen.getByRole('checkbox', { name: 'Тестовое задание' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'Покрытие тестами' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('checkbox', { name: 'Прекрасный код' })
    ).toBeNull();
  });

  it('shows completed tasks', async () => {
    renderTodoList();

    await userEvent.click(screen.getByRole('button', { name: 'Completed' }));

    expect(
      screen.queryByRole('checkbox', { name: 'Тестовое задание' })
    ).toBeNull();
    expect(
      screen.queryByRole('checkbox', { name: 'Покрытие тестами' })
    ).toBeNull();
    expect(
      screen.getByRole('checkbox', { name: 'Прекрасный код' })
    ).toBeInTheDocument();
  });
});
