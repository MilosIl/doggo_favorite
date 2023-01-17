'use client';
import './globals.css';
import { useState, useEffect } from 'react';
import { Breeds, BreedsName } from '@/models/types';

async function getBreeds() {
  try {
    const res = await fetch(
      'https://api.thedogapi.com/v1/breeds?api_key=live_YXejSYT0lmejDsPBw4qk6YVyRbGnP8HIGe489tK26eJkzKOAi7gmnMPhGLzlwQ3o',
      { cache: 'force-cache' }
    );
    const breeds: Breeds[] = await res.json();
    console.log('breeds', breeds)
    return breeds;
  } catch (error) {
    console.log(error);
  }
}

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [suggestions, setSuggestions] = useState<[]>([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    (async () => {
      if (!search) {
        return;
      }
   
      const data = await getBreeds();
      setSuggestions(data);
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
          {suggestions.map((suggestion:BreedsName) => {
            return <div key={suggestion.id}>{suggestion.name}</div>;
          })}
        </div>
      </main>
    </div>
  );
}
