import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Title, Element } from '../../../GlobalStyles';
import { ROUTER_PARAM_NEW } from '../../../config/app';
import { TodoItem } from '../../../types/todo';
import { logger } from '../../../utils/logger';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { getPathByName } from '../../../router';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { appActions } from '../../../store/app';
import {
  todoListActions,
  todoListSelectors,
} from '../../todoList/todoListReducer';
import { getCurrentUnixTime } from '../../../utils/getCurrentUnixTime';
import { TodoItemFormProps, TodoItemFormValidationSchema } from './types';
import saveIcon from './assets/img/save.svg';
import cancelIcon from './assets/img/cancel.svg';

const DEFAULT_INITIAL_VALUES: TodoItem = {
  id: 0,
  content: '',
  isDone: false,
  title: '',
  date: 0,
};

export const TodoItemForm: FC<TodoItemFormProps> = ({ id }) => {
  const isNew = id === ROUTER_PARAM_NEW;
  const dispatch = useAppDispatch();
  const maxId = useAppSelector(todoListSelectors.getMaxId);
  const todoList = useAppSelector(todoListSelectors.getTodoList);
  const [isEditError, setIsEditError] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<TodoItem>(
    DEFAULT_INITIAL_VALUES,
  );

  useEffect(() => {
    // если это редактирование то меняем initialValues на найденные
    // значения для данного ид, иначе ничего не делаем
    // при этом  из-за   enableReinitialize: true при смене initialValues
    // formik автоматом реинициализирует форму
    if (!isNew) {
      const currentTodoItemIndex = todoList.findIndex(
        (todoItem) => todoItem.id === parseInt(id),
      );
      if (currentTodoItemIndex >= 0) {
        const currentTodoItem = todoList[currentTodoItemIndex];
        setInitialValues(currentTodoItem);
      } else {
        // Если при редактировании не находим элемент с таким ид,
        // то выводим ошибку
        setIsEditError(true);
      }
    }
  }, [isNew]);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      logger('formSubmit', values);

      if (isNew) {
        //этот блок выполняем если создаем новое дело
        const newId = maxId + 1;
        dispatch(todoListActions.setMaxId(newId));
        const newTodoItem: TodoItem = {
          ...values,
          id: newId,
          date: getCurrentUnixTime(),
        };

        dispatch(todoListActions.addTodoItem(newTodoItem));
      } else {
        //этот блок выполняем если редактируем существующее дело
        logger('formSubmit', 'edit save');
        dispatch(todoListActions.updateTodoItem(values));
      }
      const path = getPathByName('todoList');
      dispatch(appActions.redirect(path));
    },
    enableReinitialize: true,
    validationSchema: TodoItemFormValidationSchema,
  });

  const handleCancel = () => {
    const path = getPathByName('todoList');
    dispatch(appActions.redirect(path));
  };

  return (
    <Wrap>
      <Element mt={0}>
        <Title isAlignCenter={true}>
          {isNew ? <>Новое дело</> : <>Редактируем дело с id={id}</>}
        </Title>

        {isEditError && (
          <EditErrorMessage>НЕТ ДЕЛА С ТАКИМ ИД!!!</EditErrorMessage>
        )}

        {!isEditError && (
          <Form noValidate onSubmit={formik.handleSubmit} autoComplete={'off'}>
            <Element mt={20}>
              <Input
                label={'Заголовок'}
                placeholder={'Введите заголовок дела'}
                type={'text'}
                {...formik.getFieldProps('title')}
                error={formik.errors.title}
                showError={
                  Boolean(formik.touched.title) && Boolean(formik.errors.title)
                }
              />
            </Element>
            <Element mt={20}>
              <Input
                label={'Описание'}
                placeholder={'Введите описание дела'}
                type={'text'}
                {...formik.getFieldProps('content')}
                error={formik.errors.content}
                showError={
                  Boolean(formik.touched.content) &&
                  Boolean(formik.errors.content)
                }
              />
            </Element>
            <Element mt={20}>
              <ButtonWrap>
                <Button type={'submit'} icon={saveIcon} iconSize={50} />
                <Button
                  type={'button'}
                  icon={cancelIcon}
                  iconSize={60}
                  onClick={handleCancel}
                />
              </ButtonWrap>
            </Element>
          </Form>
        )}
      </Element>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Form = styled.form`
  width: 100%;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const EditErrorMessage = styled.div`
  color: red;
`;
