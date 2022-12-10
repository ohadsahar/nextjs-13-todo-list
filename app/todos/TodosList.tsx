import Link from 'next/link';
import React from 'react';
import { Todo } from '../../public/typeing';

const fetchTodos = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await result.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();
  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </div>
  );
}

export default TodosList;
