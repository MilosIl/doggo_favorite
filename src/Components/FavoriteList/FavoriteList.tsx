import { FavoriteContext } from '@/context/FavoriteContext';
import { useContext } from 'react';

export interface IFavoriteList {}

const FavoriteList: React.FC<IFavoriteList> = () => {
  const favoriteContexts = useContext(FavoriteContext);
  return (
    <div className=" w-1/4">
      <p className="text-lg font-medium text-center border-b p-2 border-b-green-500 ">
        List of favorite dogs
      </p>
      <ul className='list-none'>
        {favoriteContexts?.map((favoriteContext, index) => {
          return (
            favoriteContext && 
            <li key={index} className="p-2 text-base ">
              {favoriteContext}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoriteList;
