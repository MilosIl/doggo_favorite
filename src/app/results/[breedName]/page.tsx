import { Breeds } from '../../../models/types';
import getBreed from '../../../lib/gretBreed';
import Image from 'next/image';

type Params = {
  params: {
    breedName: string;
  };
};

export default async function BreedPage({ params: { breedName } }: Params) {
  const breedData: Promise<Breeds> = getBreed(breedName);
  const breed = await Promise.resolve(breedData);
  return (
    <div key={breed.id} className="bg-slate-300 rounded-lg p-4  w-fit">
      <h2 className="text-xl text-zinc-800 font-semibold border-b pb-1 border-b-green-700">
        {breed.name}
      </h2>
      <div className="flex flex-col gap-2 mt-4">
        <div className="w-[300px] h-[300px] grid place-items-center ">
          <Image
            src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
            width={300}
            height={300}
            alt={breed.name}
            unoptimized
          />
        </div>
        {breed.bred_for ? <p>Breed for: {breed.bred_for}</p> : ''}
        {breed.breed_group ? <p>Breed group is: {breed.breed_group}</p> : ''}
        {breed.temperament ? <p>Temperament: {breed.temperament}</p> : ''}
        {breed.description ? <p>Description: {breed.description}</p> : ''}
        {breed.origin ? <p>Origin is: {breed.origin}</p> : ''}
        {breed.weight.metric ? <p>Weight: {breed.weight.metric} kg</p> : ''}
        {breed.height.metric ? <p>Height: {breed.height.metric} cm</p> : ''}
        {breed.life_span ? <p>Live span is: {breed.life_span} average</p> : ''}
      </div>
    </div>
  );
}
