'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
interface FavoriteContextProps {
  favorite: { name: string; id: number }[];
  setFavorite: Dispatch<SetStateAction<{ name: string; id: number }[]>>;
}
const favoriteList = [
  { name: 'Miniature Schnauzer', id: 168 },
  { name: 'German Shepherd Dog', id: 115 },
];

const FavoriteContext = createContext<FavoriteContextProps>({
  favorite: favoriteList,
  setFavorite: (): string[] => [],
});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorite, setFavorite] =
    useState<{ name: string; id: number }[]>(favoriteList);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoriteContext);
