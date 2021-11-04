import { RootState } from '../../../store/types';
import { TodoList } from '../types';

export const getTodoList = (state: RootState): TodoList =>
  state.todoList.todoList;

export const getMaxId = (state: RootState): number => state.todoList.maxId;
