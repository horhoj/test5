import { TodoItem } from '../../../types/todo';

export const findFilter = (todoItem: TodoItem, findStr: string): boolean =>
  todoItem.title.toLowerCase().includes(findStr.toLowerCase()) ||
  todoItem.content.toLowerCase().includes(findStr.toLowerCase());
