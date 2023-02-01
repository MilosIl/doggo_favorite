'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import imageLoad from '../../../imageLoader';
import useDebounce from '../../hooks/useDebounce';
import DogCard from '../DogCard/DogCard';
import IDogCard from '../DogCard/DogCard';
import { Breeds } from '../../models/types';

export interface ISearchBar {}

async function getBreeds(search: string): Promise<string[]> {
  const res = await fetch(
    'https://api.thedogapi.com/v1/breeds?api_key=live_YXejSYT0lmejDsPBw4qk6YVyRbGnP8HIGe489tK26eJkzKOAi7gmnMPhGLzlwQ3o',
    { cache: 'force-cache' }
  );
  const breeds: Breeds[] = await res.json();

  return new Promise(() => {
    breeds as unknown
  });
}

const SearchBar: React.FC<ISearchBar> = () => {

  const [search, setSearch] = useState<string>('');
  const [allBreeds,setAllBreeds]=useState<string[]>([])
  const debounceSearch = useDebounce(search, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let isLoading = false;
    (async () => {
      setAllBreeds([]);
      if (debounceSearch.length > 0) {
        const data = await getBreeds(debounceSearch);
        const dataAll = await getBreeds(debounceSearch);
        if (!isLoading) {
          setAllBreeds(data);
          setAllBreeds(dataAll)
        }
      }
      return () => {
        isLoading = true;
      };
    })();
  }, [debounceSearch]);

  return (
    <>
      <div className="rounded-lg m-1 p-2 bg-green-700 border-green-700  border-2 min-w-xs  hover:drop-shadow-md hover:bg-green-800 focus:bg-green-800 focus-within:border-green-800">
        <label className='flex justify-center align-middle gap-2'>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            className="w-full outline-none p-2 rounded-lg"
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
      <ul className='bg-slate-200 list-none'>
        {allBreeds &&
          allBreeds.map((allBreed:typeof IDogCard, index) => {
            return <DogCard key={index} weight={allBreed.weight} height={undefined} id={allBreed.id} name={allBreed.name} lifeSpan={allBreed.life} referenceImageID={''} image={undefined} />
          })}
      </ul>
    </>
  );
};

export default SearchBar;
