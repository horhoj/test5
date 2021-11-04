import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoList } from '../types';
import { TodoItem } from '../../../types/todo';
import { TodoListState } from './types';
import { data } from './data';

const initialState: TodoListState = {
  maxId: 100,
  todoList: [...data],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<TodoList>) => {
      state.todoList = action.payload;
    },
    changeIsDone: (
      state,
      action: PayloadAction<{ id: number; isDone: boolean }>,
    ) => {
      const { id, isDone } = action.payload;
      const todoItemIndex = state.todoList.findIndex(
        (todoItem) => todoItem.id === id,
      );

      state.todoList[todoItemIndex].isDone = isDone;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload,
      );
    },
    setMaxId: (state, action: PayloadAction<number>) => {
      state.maxId = action.payload;
    },
    addTodoItem: (state, action: PayloadAction<TodoItem>) => {
      state.todoList.push(action.payload);
    },
    updateTodoItem: (state, action: PayloadAction<TodoItem>) => {
      const newTodoItem = action.payload;

      const todoItemIdx = state.todoList.findIndex(
        (todoItem) => todoItem.id === newTodoItem.id,
      );

      state.todoList[todoItemIdx] = newTodoItem;
    },
  },
});
