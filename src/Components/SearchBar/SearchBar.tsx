'use client';
import React, { useState,useEffect } from 'react';
import { Breeds } from '@/models/types';
import useDebounce from '@/hooks/useDebounce'
export interface ISearchBar {}

async function getBreedsName(search:string):Promise<string[]> {

  const res = await fetch(
    'https://api.thedogapi.com/v1/breeds?api_key=live_YXejSYT0lmejDsPBw4qk6YVyRbGnP8HIGe489tK26eJkzKOAi7gmnMPhGLzlwQ3o',
    { cache: 'force-cache' }
  );
  const breeds: Breeds[] = await res.json();
  const breedsNames = breeds.map((breed)=>breed.name)


  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(
        breedsNames.filter((breedName)=>breedName.toLowerCase().includes(search.toLowerCase()))
        )

    },500)
  })


}

const SearchBar: React.FC<ISearchBar> = () => {
  const [search, setSearch] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const debounceSearch = useDebounce(search,500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    (async () => {
      setSuggestions([])
      if (debounceSearch.length>0) {
        const data = await getBreedsName(debounceSearch);
        setSuggestions(data);
        console.log('data', data)
      }
   
    })();
  }, [debounceSearch]);
  
  return (<>
  
    <div className="rounded-lg m-2 p-1 bg-green-700 border-green-700  border-2 w-fit flex justify-center align-middle hover:drop-shadow-md hover:bg-green-800 focus:bg-green-800 focus-within:border-green-800">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className="w-[450px] outline-none p-2 rounded-lg"
        placeholder="type here.."
      />
    </div>
    <div>
          {suggestions  && suggestions.map((suggestion, index) => {
            return <div key={index}>{suggestion}</div>;
          })}
        </div>
  </>
  );
};

export default SearchBar;
