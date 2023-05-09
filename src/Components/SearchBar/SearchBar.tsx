'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import useDebounce from '@/hooks/useDebounce';
import getBreeds from '@/lib/getBreeds';
import { Breeds } from '@/models/types';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Breeds[]>([]);
  const debounceSearch = useDebounce(search, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let isLoading = false;
    (async () => {
      setResults([]);
      if (debounceSearch.length > 0) {
        const data: Breeds[] = await getBreeds();
        if (!isLoading) {
          const filterBreed = data.filter((breed) =>
            breed.name.toLowerCase().includes(debounceSearch.toLowerCase())
          );
          setResults(filterBreed);
        }
      }
      return () => {
        isLoading = false;
      };
    })();
  }, [debounceSearch]);

  return (
    <>
      <div className="rounded-lg m-1 p-1 bg-green-700 border-green-700  border-2 w-80 hover:drop-shadow-md hover:bg-green-800 focus:bg-green-800 focus-within:border-green-800">
        <label htmlFor="search">
          <input
            type="text"
            className="w-full outline-none p-2 rounded-lg"
            value={search}
            onChange={handleChange}
            placeholder="type here..."
          />
        </label>
      </div>
      <ul className="mt-2 bg-slate-400 ">
        {results &&
          results.map((result) => {
            return (
              <li
                key={result.id}
                className="p-2 my-1 odd:bg-slate-300 hover:bg-green-700"
              >
                <Link href={`/results/${result.id}`}>{result.name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SearchBar;
