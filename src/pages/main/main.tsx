import { Container, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { Input } from './components/input';
import { TodoList } from './modules/todoList';

export const MainPage: FC = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: '10%' }}>
      <Paper
        elevation={3}
        sx={{ p: 2, '& > *': { mb: 3 }, '& > *:last-child': { mb: 0 } }}
      >
        <Typography
          fontFamily={'Montserrat, sans-serif'}
          fontWeight={200}
          variant="h2"
          component="h1"
          textAlign={'center'}
          color="secondary"
        >
          Todo list
        </Typography>
        <Input />
        <TodoList />
      </Paper>
    </Container>
  );
};
