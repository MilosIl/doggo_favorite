'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
interface IFavoriteContext {
  favorite: string[];
  setFavorite: Dispatch<SetStateAction<string[]>>;
}

export function useLocal(){
  return useLocalStorage('favoriti',['123','321'])
}

const FavoriteContext = createContext<IFavoriteContext>({
  favorite: [],
  setFavorite: (): string[] => [],
});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  
  const [favorite, setFavorite] = useState<string[]>(['German Shepherd Dog', 'Miniature Schnauzer']);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoriteContext);
