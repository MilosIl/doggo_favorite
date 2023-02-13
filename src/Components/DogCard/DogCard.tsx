'use client';
import { Breeds } from '../../models/types';
import imageLoader from '../../../imageLoader';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { FavoriteContext } from '@/context/FavoriteContext';

const DogCard = ({
  weight,
  height,
  id,
  name,
  bredFor,
  breedGroup, 
  lifeSpan,
  temperament,
  origin,
  referenceImageID,
  image,
  countryCode,
  description,
  history,
}: Breeds) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const favoriteList = useContext(FavoriteContext);
  const [favorite, setFavorite] = useState(favoriteList);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      favorite.length > 0 && setFavorite([name]);
      console.log('favoriteList', favoriteList);
    }
  };
  return (
    <div className="m-4 p-4 bg-slate-300 rounded-lg min-w-xs " key={id}>
      <div className="flex justify-center mb-4 ">
        <Image
          loader={imageLoader}
          unoptimized
          src={image.url}
          height={image.height}
          width={image.width}
          alt={referenceImageID}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold border-b border-b-green-700 mb-2">
        Name: {name}
      </h2>
      <div className="flex flex-col gap-2">
        {bredFor ? <div>Breed for: {bredFor}</div> : null}
        {breedGroup ?  <div>Breed group is: {breedGroup}</div> : null}
        {temperament ? <div>Temperament: {temperament}</div> : null}
        {description ? <div>Description: {description}</div> : null}
        {origin ? <div>Origin is: {origin}</div> : null}
        {weight.metric ?   <div>Weight: {weight.metric} kg</div> : null}
        {height.metric ? <div>Height: {height.metric} cm</div> : null}
        {lifeSpan ? <div>Life span is: {lifeSpan} average</div> : null}
        {history ? <div>History {history}</div> : null}
        {countryCode ? <div>Country code is: {countryCode} </div> : null}
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
