import { Breeds } from '../../../models/types';
import getBreed from '../../../lib/getBreed';
import FavoriteButton from '@/Components/FavoriteList/FavoriteButton';
import DogCard from '@/Components/DogCard';

type Params = {
  params: {
    breedName: string;
  };
};

export default async function BreedPage({ params: { breedName } }: Params) {
  const breedData: Promise<Breeds> = getBreed(breedName);
  const breed = await Promise.resolve(breedData);

  return (
    <section
      key={breed.id}
      className="bg-slate-300 rounded-lg p-4 mb-4 h-fit  w-fit"
    >
      <h2 className="text-xl text-zinc-800 font-semibold border-b pb-1 border-b-green-700">
        {breed.name}
      </h2>
      <DogCard {...breed} />
      <FavoriteButton id={breed.id} name={breed.name} />
    </section>
  );
}
