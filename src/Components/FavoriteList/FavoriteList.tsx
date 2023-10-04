'use client';

import { useFavoriteContext } from '../../context/FavoriteContext';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

interface FavoriteListProps {
  isVisible: boolean;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ isVisible }) => {
  const { favorite, setFavorite } = useFavoriteContext();

  useEffect(() => {
    localStorage.setItem('FAVORITE', JSON.stringify(favorite));
  }, [favorite]);

  const handleRemove = (id: number) => {
    setFavorite((currentFavorite) => {
      return currentFavorite.filter((favorite) => favorite.id !== id);
    });
  };

  return (
    <>
      {isVisible && (
        <aside
          className={`block md:w-1/5 h-fit max-w-sm max-sm:absolute bg-green-200  ${
            isVisible
              ? 'max-sm:block max-sm:absolute max-sm:left-0 max-sm:top-4 max-sm:w-max '
              : 'max-sm:hidden '
          } `}
        >
          <ul className="list-none">
            {favorite.map((favorit) => {
              return (
                <li
                  key={favorit.id}
                  className="flex items-center justify-between font-medium gap-2 my-2 p-2 hover:bg-green-300"
                >
                  <Link href={`/results/${favorit.id}`}>{favorit.name}</Link>
                  <button onClick={() => handleRemove(favorit.id)}>
                    <Image
                      className="pr-1"
                      src="/close.svg"
                      unoptimized
                      width="20"
                      height="20"
                      alt="close"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </>
  );
};

export default FavoriteList;
