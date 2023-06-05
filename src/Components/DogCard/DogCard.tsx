'use client';

import { Breeds } from '../../models/types';
import Image from 'next/image';
import { useState } from 'react';

const DogCard = ({
  height,
  id,
  life_span,
  name,
  reference_image_id,
  weight,
  bred_for,
  breed_group,
  description,
  origin,
  temperament,
}: Breeds) => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite((favorite) => !favorite);
  };
  return (
    <div
      className="m-4 p-6 bg-slate-300 rounded-lg min-w-xs min-h-fit"
      key={id}
    >
      <div className="flex justify-center mb-4 ">
        <Image
          unoptimized
          src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
          height={300}
          width={300}
          alt={reference_image_id}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold border-b border-b-green-700 mb-2">
        Name: {name}
      </h2>
      <div className="flex flex-col gap-2">
        <div>Breed for: {bred_for}</div>
        <div>Breed group is: {breed_group}</div>
        <div>Temperament: {temperament}</div>
        <div>Description: {description}</div>
        <div>Origin is: {origin}</div>
        <div>Weight: {weight.metric} kg</div>
        <div>Height: {height.metric} cm</div>
        <div>Life span is: {life_span} average</div>
      </div>
      <button className="p-2" onClick={handleClick}>
        {favorite ? (
          <Image
            unoptimized
            src="./hearth_full.svg"
            width="35"
            height="35"
            alt="hearth_full"
          />
        ) : (
          <Image
            src="./hearth.svg"
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
