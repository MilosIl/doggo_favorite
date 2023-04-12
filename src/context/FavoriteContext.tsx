'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
interface IFavoriteContext {
  favorite: {name:string, id:number}[];
  setFavorite: Dispatch<SetStateAction<{ name: string; id: number; }[]>>;
}


const FavoriteContext = createContext<IFavoriteContext>({
  favorite: [{'name':'German Shepherd Dog','id':115}, {'name':'Miniature Schnauzer', 'id':168}],
  setFavorite: (): string[] => [],
});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  
  const [favorite, setFavorite] = useState<{name:string, id:number}[]>([{'name':'German Shepherd Dog','id':115}, {'name':'Miniature Schnauzer', 'id':168}]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoriteContext);
