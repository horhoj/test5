import { configureStore } from '@reduxjs/toolkit';
import { todoListReducer } from '../features/todoList/todoListReducer';
import { appReducer } from './app';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appReducer,
    todoList: todoListReducer,
  },
});
