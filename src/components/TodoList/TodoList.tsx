import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  IdToLoad: number[];
  onToggle: (todo: Todo) => void;
  editingTodo: Todo | null;
  setEditingTodo: (todo: Todo | null) => void;
  onTitleSubmit: (todo: Todo) => void;
  setError: (error: string) => void;
  newTitle: string;
  setNewTitle: (title: string) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  onDelete,
  IdToLoad,
  onToggle,
  editingTodo,
  setEditingTodo,
  onTitleSubmit,
  setError,
  newTitle,
  setNewTitle,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
            IdToLoad={IdToLoad}
            onToggle={onToggle}
            editingTodo={editingTodo}
            setEditingTodo={setEditingTodo}
            onTitleSubmit={onTitleSubmit}
            setError={setError}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
          />
        );
      })}
    </section>
  );
};
