import { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { todoListActions, todoListSelectors } from '../todoListReducer';
import { Title, Element } from '../../../GlobalStyles';
import { logger } from '../../../utils/logger';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { Button } from '../../../components/Button';
import { ROUTER_PARAM_NEW } from '../../../config/app';
import { TodoItemView } from './components/TodoItemView';

import addIcon from './assets/img/add.svg';

export const TodoListForm: FC = () => {
  const todoList = useAppSelector(todoListSelectors.getTodoList);
  const dispatch = useAppDispatch();

  const handleIsDoneChange = (isDone: boolean, id: number) => {
    dispatch(todoListActions.changeIsDone({ id, isDone }));
  };

  const handleDelete = (id: number) => {
    if (confirm('Удалить?')) {
      logger('handleDelete', id);
      dispatch(todoListActions.deleteItem(id));
    }
  };

  const handleEdit = (id: number) => {
    logger('handleEdit', id);
    const path = getPathByName('todoItem', { id });
    dispatch(appActions.redirect(path));
  };

  const handleAdd = () => {
    const path = getPathByName('todoItem', { id: ROUTER_PARAM_NEW });
    dispatch(appActions.redirect(path));
  };

  return (
    <>
      <Element mt={0}>
        <Title isAlignCenter={true}>Список дел</Title>
      </Element>
      <Element mt={20}>
        <Button
          iconSize={50}
          icon={addIcon}
          type={'button'}
          onClick={handleAdd}
        />
      </Element>
      <Element mt={20}>
        <WrapTodoList>
          {todoList.map((todoItem) => (
            <TodoItemView
              key={todoItem.id}
              todoItem={todoItem}
              handleIsDoneChange={handleIsDoneChange}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </WrapTodoList>
      </Element>
    </>
  );
};

const WrapTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
