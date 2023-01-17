'use client';
import './globals.css';

import { useState, useEffect } from 'react';
import { Breeds } from '@/models/types';


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

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    (async () => {
      if (!search) {
        return;
      }
   
      const data = await getBreedsName(search);
      setSuggestions(data);
      console.log('data', data)
    })();
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-auto">
      <h1 className="text-2xl font-extrabold  text-zinc-800">
        Welcome to Doggo site
      </h1>
      <p className="mt-2 mb-6 uppercase text-xl font-bold  text-zinc-800">
        find information about breed of dogs
      </p>
      <main>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="w-[450px] outline-none p-2 rounded-lg"
          placeholder="type here.."
        />
        <div>
          {suggestions  && suggestions.map((suggestion, index) => {
            return <div key={index}>{suggestion}</div>;
          })}
        </div>
      </main>
    </div>
  );
}
