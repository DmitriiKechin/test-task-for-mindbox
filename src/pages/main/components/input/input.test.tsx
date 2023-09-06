import { act, render, renderHook, screen } from '@testing-library/react';
import { useTodoStore } from '../../stores/todo';
import { Input } from './input';
import userEvent from '@testing-library/user-event';

const renderInput = () => {
  return render(<Input />);
};

describe('input component', () => {
  it('renders', () => {
    renderInput();

    expect(screen.getByPlaceholderText(/add an items/i)).toBeInTheDocument();
  });

  it('text input', async () => {
    renderInput();

    await userEvent.type(screen.getByPlaceholderText(/add an items/i), 'text');
    expect(screen.getByDisplayValue(/text/i)).toBeInTheDocument();
  });

  it('button click handler', async () => {
    const { result } = renderHook(() => useTodoStore());
    const user = userEvent.setup();
    renderInput();

    userEvent.type(screen.getByPlaceholderText(/add an items/i), 'text');

    await act(async () => {
      await user.click(await screen.findByRole('button'));
    });

    expect(screen.queryByDisplayValue(/add an items/i)).toBeNull();

    expect(result.current.tasks.length).toEqual(4);
  });
});
