import { TodoEntity } from './store/types';

export const filterTodosBySearch = (todos: TodoEntity[], entry: string) => {
  const filtered = [...todos].filter((todo) =>
    todo.title.toLowerCase().includes(entry.toLowerCase())
  );

  return filtered;
};

export const getLast10Todos = (todos: TodoEntity[]) => {
  if (todos.length <= 10) return todos;

  const sorted = [...todos].sort((itemA, itemB) => {
    return (
      new Date(itemB.createdAt).valueOf() - new Date(itemA.createdAt).valueOf()
    );
  });

  return sorted.slice(0, 10);
};
