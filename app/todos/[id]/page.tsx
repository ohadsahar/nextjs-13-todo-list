import React from 'react';
import { Todo } from '../../../public/typeing';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

interface PageProps {
  params: {
    id: string;
  };
}

const fetchToDo = async (id: string) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await result.json();
  return todo;
};

async function TodoPage({ params: { id } }: PageProps) {
  const todo = await fetchToDo(id);

  if (!todo.id) return notFound();

  return (
    <div className='bg-yellow-200 p-10 border-2 m-2 shadow-lg'>
      <p>
        # {todo?.id} {todo?.title}
      </p>
      <p>Completed: {todo?.completed ? 'Yes' : 'No'}</p>
      <p>By user : {todo?.userId}</p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: Todo[] = await result.json();

  const trimmedTodos = todos.splice(0, 50);

  return trimmedTodos.map((todo) => ({
    id: todo?.id.toString(),
  }));
}
