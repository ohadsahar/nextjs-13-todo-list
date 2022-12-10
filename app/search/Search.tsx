'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          placeholder='Enter the search term'
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <button
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'
          type='submit'
        >
          Search
        </button>
      </form>
    </div>
  );
};
