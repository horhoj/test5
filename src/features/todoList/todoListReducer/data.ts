import { getCurrentUnixTime } from '../../../utils/getCurrentUnixTime';
import { TodoList } from '../types';

export const data: TodoList = [
  {
    id: 1,
    title: 'Купить продукты',
    content: 'Нужно купить молоко, хлеб и виноград',
    date: getCurrentUnixTime(),
    isDone: true,
  },
  {
    id: 2,
    title: 'Договориться о назначении исполнителя проекта',
    content:
      'Необходимо рассмотреть кандидатуру Александра, на экологический проект предложенный Виктором',
    date: getCurrentUnixTime(),
    isDone: false,
  },
  {
    id: 3,
    title: 'Отрефакторить код проекта',
    content: 'Необходимо доработать код текущего проекта',
    date: getCurrentUnixTime(),
    isDone: false,
  },
];
