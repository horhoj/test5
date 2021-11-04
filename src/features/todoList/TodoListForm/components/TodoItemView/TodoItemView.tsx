import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { Element } from '../../../../../GlobalStyles';
import { Button } from '../../../../../components/Button';
import editIcon from '../../assets/img/edit.svg';
import deleteIcon from '../../assets/img/delete.svg';
import { TodoItemViewProps } from './types';

export const TodoItemView: FC<TodoItemViewProps> = ({
  todoItem,
  handleIsDoneChange,
  handleDelete,
  handleEdit,
}) => {
  const handleIsDoneCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    handleIsDoneChange(isChecked, todoItem.id);
  };

  return (
    <>
      <Wrap>
        <Element mt={0}>
          <ItemHeader>
            <IsDoneCheckBoxLabel isDone={todoItem.isDone}>
              <IsDoneCheckBox
                type="checkbox"
                checked={todoItem.isDone}
                onChange={handleIsDoneCheckBoxChange}
              />
              {todoItem.isDone ? 'сделано!' : 'не сделано!'}
            </IsDoneCheckBoxLabel>
            <ButtonWrap>
              <Button
                type={'button'}
                icon={editIcon}
                iconSize={50}
                onClick={() => handleEdit(todoItem.id)}
              />
              <Button
                type={'button'}
                icon={deleteIcon}
                iconSize={50}
                onClick={() => handleDelete(todoItem.id)}
              />
            </ButtonWrap>
          </ItemHeader>
        </Element>
        <Element mt={20}>
          <ItemTitle>{todoItem.title}</ItemTitle>
        </Element>
        <Element mt={10}>
          <DateWrap>{new Date(todoItem.date).toLocaleString()}</DateWrap>
        </Element>

        <Element mt={10}>
          <ItemContent>{todoItem.content}</ItemContent>
        </Element>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
`;

const DateWrap = styled.div`
  display: flex;
  justify-content: end;
  font-size: 16px;
  gap: 10px;
`;

const ItemTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const ItemContent = styled.div`
  font-size: 18px;
`;

const IsDoneCheckBox = styled.input`
  width: 50px;
  height: 50px;
`;

const IsDoneCheckBoxLabel = styled.label<{ isDone: boolean }>`
  display: flex;
  gap: 15px;
  font-size: 20px;
  line-height: 50px;
  color: ${({ isDone }) => (isDone ? 'green' : 'red')};
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 5px;
`;
