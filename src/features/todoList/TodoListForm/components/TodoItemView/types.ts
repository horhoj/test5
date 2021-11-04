import { TodoItem } from '../../../../../types/todo';

export interface TodoItemViewProps {
  todoItem: TodoItem;
  handleIsDoneChange(isDone: boolean, id: number): void;
  handleDelete(id: number): void;
  handleEdit(id: number): void;
}
