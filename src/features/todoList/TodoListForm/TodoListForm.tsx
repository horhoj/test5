import { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { todoListActions, todoListSelectors } from '../todoListReducer';
import { Title, Element } from '../../../GlobalStyles';
import { logger } from '../../../utils/logger';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { Button } from '../../../components/Button';
import { ROUTER_PARAM_NEW } from '../../../config/app';
import { Input } from '../../../components/Input';
import { TodoItemView } from './components/TodoItemView';
import addIcon from './assets/img/add.svg';
import clearIcon from './assets/img/clear.svg';
import { findFilter } from './helpers';

export const TodoListForm: FC = () => {
  const todoList = useAppSelector(todoListSelectors.getTodoList);
  const dispatch = useAppDispatch();
  const [findStr, setFindStr] = useState<string>('');

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

  const handleClearFindStr = () => {
    setFindStr('');
  };

  return (
    <>
      <Element mt={0}>
        <Title isAlignCenter={true}>Список дел</Title>
      </Element>
      <Element mt={20}>
        <ControlPanel>
          <Button
            iconSize={50}
            icon={addIcon}
            type={'button'}
            onClick={handleAdd}
          />
          <Input
            type={'text'}
            onChange={(e) => setFindStr(e.target.value)}
            value={findStr}
            showError={false}
            placeholder={'Найти'}
            label={'Найти'}
          />
          <Button
            iconSize={60}
            icon={clearIcon}
            type={'button'}
            onClick={handleClearFindStr}
          />
        </ControlPanel>
      </Element>
      <Element mt={20}>
        <WrapTodoList>
          {todoList
            .filter((todoItem) => findFilter(todoItem, findStr))
            .map((todoItem, index) => (
              <TodoItemView
                key={todoItem.id}
                todoItem={todoItem}
                handleIsDoneChange={handleIsDoneChange}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                findStr={findStr}
                index={index + 1}
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

const ControlPanel = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
