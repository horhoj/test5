import * as selectors from './selectors';
import { todoListSlice } from './slice';

export const { actions: todoListActions, reducer: todoListReducer } =
  todoListSlice;

export const todoListSelectors = selectors;
