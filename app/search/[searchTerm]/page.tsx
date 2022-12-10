import React from 'react';

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const SearchTerm = async ({ params: { searchTerm } }: PageProps) => {
  const api_key =
    '796d802230131b21b9c556d088e716197a7001eaeae596eaedf106bbe429f729';

  const search = async (value: string) => {
    const result = await fetch(
      `https://serpapi.com/search.json?q=${value}&api_key=${process.env.API_KEY}`
    );
    // throw new Error('Whooops something wnet wrong');
    const data: SearchResult = await result.json();
    return data;
  };

  const result = await search(searchTerm);

  return (
    <div>
      <p>You searched for: {searchTerm}</p>
      <ol className='space-y-5 p-5'>
        {result.organic_results.map((value) => (
          <li key={value.position} className='list-decimal'>
            <p className='font-bold'>{value.title}</p>
            <p>{value.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchTerm;
