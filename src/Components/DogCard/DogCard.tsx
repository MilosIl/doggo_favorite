'use client';
import { Breeds } from '../../models/types';
import imageLoader from '../../../imageLoader';
import Image from 'next/image';
import React, { useState } from 'react';

const DogCard = ({
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
  const [favorite, setFavorite] = useState(false);
  
  const handleClick = () => {
    setFavorite((favorite) => !favorite);
    
  };
  return (
    <div className="m-4 p-4 bg-slate-300 rounded-lg min-w-xs " key={id}>
      <div className="flex justify-center mb-4 ">
        <Image
          loader={imageLoader}
          unoptimized
          src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
          height={300}
          width={300}
          alt={referenceImageID}
          className='rounded-lg'
        />
      </div>
      <h2 className="text-xl font-semibold border-b border-b-green-700 mb-2">Name: {name}</h2>
      <div className='flex flex-col gap-2'>

      <div>Temperament: {temperament}</div>
      <div>Description: {description}</div>
      <div>Origin is: {origin}</div>
      <div>Breed for: {bredFor}</div>
      <div>Breed group is: {breedGroup}</div>
      <div>Weight: {weight.metric} kg</div>
      <div>Height: {height.metric} cm</div>
      <div>Life span is: {lifeSpan} average</div>
      </div>
      <button className='p-2' onClick={handleClick}>
        {favorite ? (
          <Image
            loader={imageLoader}
            unoptimized
            src="./hearth_full.svg"
            width="35"
            height="35"
            alt="hearth_full"
          />
        ) : (
          <Image
            src="./hearth.svg"
            loader={imageLoader}
            unoptimized
            width="35"
            height="35"
            alt="hearth"
          />
        )}
      </button>
    </div>
  );
};

export default DogCard;
