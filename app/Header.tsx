import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className='p-5 bg-blue-500'>
      <Link className='px-2 py-1 bg-white text-blue-500 rounded-lg mr-8' href='/'>
        Home
      </Link>
      <Link
        className='px-2 py-1 bg-white text-blue-500 rounded-lg mr-8'
        href='/todos'
      >
        Todos
      </Link>
      <Link
        className='px-2 py-1 bg-white text-blue-500 rounded-lg mr-8'
        href='/search'
      >
        Search
      </Link>
    </header>
  );
};
