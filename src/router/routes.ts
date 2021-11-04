import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { TodoListPage } from '../pages/TodoListPage';
import { TodoItemPage } from '../pages/TodoItemPage';
import { RouteItem } from './types';

export const routes: RouteItem[] = [
  {
    name: 'todoList',
    path: '/todo-list',
    exact: true,
    component: TodoListPage,
  },

  {
    name: 'todoItem',
    path: '/todo-item/:id',
    exact: true,
    component: TodoItemPage,
  },

  {
    name: 'routeNotFound',
    path: '*',
    exact: false,
    component: RouteNotFoundPage,
  },
];
