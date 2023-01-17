'use client';
import DogCard from '@/Components/DogCard/DogCard';
import { Breeds } from '@/models/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const dog = ({
  id,
  breedGroup,
  weight,
  height,
  name,
  bredFor,
  lifeSpan,
  origin,
  temperament,
  description,
  referenceImageID,
}: Breeds) => {
  const [dog, setDog] = useState<Breeds | null>(null);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    fetch(
      'https://api.thedogapi.com/v1/breeds?api_key=live_YXejSYT0lmejDsPBw4qk6YVyRbGnP8HIGe489tK26eJkzKOAi7gmnMPhGLzlwQ3o'
    )
      .then((res) => res.json())
      .then((json) => setDog(json));
  }, [name]);

  return (
    <div>
      {dog ? (
       <DogCard {...props} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default dog;
