import { FC } from 'react';
import { useParams } from 'react-router';
import { TodoItemForm } from '../../features/todoItem/todoItemForm';

export const TodoItemPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <TodoItemForm id={id} />
    </>
  );
};
