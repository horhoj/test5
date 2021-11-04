export type RouterPathNames = 'todoList' | 'todoItem' | 'routeNotFound';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  component: any;
}

export interface RouteParams {
  [keys: string]: string | number;
}
