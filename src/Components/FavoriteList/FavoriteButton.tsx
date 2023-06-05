'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useFavoriteContext } from '@/context/FavoriteContext';
import hearth from '../../../public/hearth.svg';
import hearth_full from '../../../public/hearth_full.svg';

const FavoriteButton = ({ id, name }: { id: number; name: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorite, setFavorite } = useFavoriteContext();

  const isFavoriteInList = favorite.some((favorit) => {
    return (
      favorit.name === name && favorit.id === id
    );
  });

  const handleAddFavorite = () => {
    if(isFavoriteInList){
      setFavorite((currentFavorite) => {
        return currentFavorite.filter((favorite) => favorite.id !== id);
      });
    }
    setIsFavorite((isFavorite) => !isFavorite);
    if (isFavorite) {
      setFavorite((prev) => [...prev, { name, id }]);
      localStorage.setItem('FAVORITE', JSON.stringify(setFavorite));
    } else {
      setFavorite((currentFavorite) => {
        return currentFavorite.filter((favorite) => favorite.id !== id);
      });
      localStorage.setItem('FAVORITE', JSON.stringify(setFavorite));
    }
  };


  return (
    <button className="m-2" onClick={handleAddFavorite}>
      {isFavoriteInList ? (
        <Image
          unoptimized
          src={hearth_full}
          width="35"
          height="35"
          alt="hearth_full"
        />
      ) : (
        <Image src={hearth} unoptimized width="35" height="35" alt="hearth" />
      )}
    </button>
  );
};

export default FavoriteButton;
