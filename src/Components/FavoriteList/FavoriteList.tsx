'use client';

import { useFavoriteContext } from '../../context/FavoriteContext';
import Link from 'next/link';
import Image from 'next/image';



const FavoriteList: React.FC = () => {
  const { favorite, setFavorite } = useFavoriteContext();

  const handleRemove=(id:number)=>{
    setFavorite(currentFavorite=>{
      return currentFavorite.filter(favorite=>favorite.id!==id)
    })
  }

  return (
    <aside className="w-1/4 h-fit bg-slate-100">
      <p className="text-lg font-medium text-center border-b p-2 border-b-green-700 ">
        My list of favorite dogs
      </p>
      <ul className="list-none">
      {favorite.map((favorit)=>{
        return(
          <li key={favorit.id} className="flex items-center justify-between my-2 p-2 hover:bg-green-300">
            <Link href={`/results/${favorit.id}`}>{favorit.name}</Link>
            <button onClick={()=>handleRemove(favorit.id)}>
            <Image
            className='pr-1'
            src="/close.svg"
            unoptimized
            width="20"
            height="20"
            alt="close"
          />
            </button>
          </li>
        )
      })}
      </ul>
    </aside>
  );
};

export default FavoriteList;
