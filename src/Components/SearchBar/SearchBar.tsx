'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imageLoad from 'imageLoader';

import useDebounce from '@/hooks/useDebounce';

import { Breeds } from '@/models/types';
import Link from 'next/link';


export interface ISearchBar {}

async function getBreedsName(search: string): Promise<string[]> {
  const res = await fetch(
    'https://api.thedogapi.com/v1/breeds?api_key=live_YXejSYT0lmejDsPBw4qk6YVyRbGnP8HIGe489tK26eJkzKOAi7gmnMPhGLzlwQ3o',
    { cache: 'force-cache' }
  );
  const breeds: Breeds[] = await res.json();
  const breedsNames = breeds.map((breed) => breed.name);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        breedsNames.filter((breedName) =>
          breedName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 500);
  });
}

const SearchBar: React.FC<ISearchBar> = () => {
  const [search, setSearch] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const debounceSearch = useDebounce(search, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let isLoading = false;
    (async () => {
      setSuggestions([]);
      if (debounceSearch.length > 0) {
        const data = await getBreedsName(debounceSearch);
        if (!isLoading) {
          setSuggestions(data);
        }
      }
      return () => {
        isLoading = true;
      };
    })();
  }, [debounceSearch]);

  return (
    <>
      <div className="rounded-lg m-1 p-2 bg-green-700 border-green-700  border-2 w-fit  hover:drop-shadow-md hover:bg-green-800 focus:bg-green-800 focus-within:border-green-800">
        <label className='flex justify-center align-middle gap-2'>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            className="w-[450px] outline-none p-2 rounded-lg"
            placeholder="type here.."
          />
          <button>
            <Image
              src="./search.svg"
              alt="search"
              loader={imageLoad}
              width={24}
              height={24}
              unoptimized
            />
          </button>
        </label>
      </div>
      <ul className='bg-green-300'>
        {suggestions &&
          suggestions.map((suggestion, index) => {
            return <li key={index} className='odd:bg-green-300 my-2 p-2 hover:bg-green-500 cursor-pointer'><Link href={`results/${suggestion}`}>{suggestion}</Link></li>;
          })}
      </ul>
    </>
  );
};

export default SearchBar;
