'use client';
import { Breeds } from '../../models/types';
import imageLoader from '../../../imageLoader';
import Image from 'next/image';
import { useState } from 'react';

const DogCard = ({ props }: Breeds) => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite((favorite) => !favorite);
  };
  return (
    <div className="m-4 p-4 bg-slate-300 rounded-lg min-w-xs " key={props.id}>
      <div className="flex justify-center mb-4 ">
        <Image
          loader={imageLoader}
          unoptimized
          src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
          height={300}
          width={300}
          alt={props.referenceImageID}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold border-b border-b-green-700 mb-2">
        Name: {props.name}
      </h2>
      <div className="flex flex-col gap-2">
        <div>Breed for: {props.bredFor}</div>
        <div>Breed group is: {props.breedGroup}</div>
        <div>Temperament: {props.temperament}</div>
        <div>Description: {props.description}</div>
        <div>Origin is: {props.origin}</div>
        <div>Weight: {props.weight.metric} kg</div>
        <div>Height: {props.height.metric} cm</div>
        <div>Life span is: {props.lifeSpan} average</div>
      </div>
      <button className="p-2" onClick={handleClick}>
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
