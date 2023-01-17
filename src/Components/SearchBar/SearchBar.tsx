'use client';
import React, { useState } from 'react';

export interface ISearchBar {}

const SearchBar: React.FC<ISearchBar> = () => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="rounded-lg m-2 p-1 bg-green-700 border-green-700  border-2 w-fit flex justify-center align-middle hover:drop-shadow-md hover:bg-green-800 focus:bg-green-800 focus-within:border-green-800">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className="w-[450px] outline-none p-2 rounded-lg"
        placeholder="type here.."
      />
    </div>
  );
};

export default SearchBar;
