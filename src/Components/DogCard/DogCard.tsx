'use client';
import { Breeds } from '../../models/types';
import imageLoader from '../../../imageLoader';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { FavoriteContext } from '@/context/FavoriteContext';

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
  const [isFavorite, setIsFavorite] = useState(true);
  const favoriteList = useContext(FavoriteContext);
  const [favorite, setFavorite]=useState(favoriteList)
  const handleClick = () => {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      favorite.length > 0 && setFavorite([name])

      console.log('favoriteList', favoriteList);
    } else {
      favoriteList.length > 0 && favoriteList.pop();
    }
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
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold border-b border-b-green-700 mb-2">
        Name: {name}
      </h2>
      <div className="flex flex-col gap-2">
        <div>Breed for: {bredFor}</div>
        <div>Breed group is: {breedGroup}</div>
        <div>Temperament: {temperament}</div>
        <div>Description: {description}</div>
        <div>Origin is: {origin}</div>
        <div>Weight: {weight.metric} kg</div>
        <div>Height: {height.metric} cm</div>
        <div>Life span is: {lifeSpan} average</div>
      </div>
      <button className="p-2" onClick={handleClick}>
        {isFavorite ? (
          <Image
            src="./hearth.svg"
            loader={imageLoader}
            unoptimized
            width="35"
            height="35"
            alt="hearth"
          />
        ) : (
          <Image
            loader={imageLoader}
            unoptimized
            src="./hearth_full.svg"
            width="35"
            height="35"
            alt="hearth_full"
          />
        )}
      </button>
    </div>
  );
};

export default DogCard;
