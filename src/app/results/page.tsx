import Link from 'next/link';
import getBreeds from '../../lib/getBreeds';
import { Breeds } from '../../models/types';
import Image from 'next/image';

export default async function page() {
  const breedData: Promise<Breeds[]> = getBreeds();
  const breeds = await breedData;
  const content = (
    <section className="container mx-auto flex flex-wrap gap-4">
      {breeds.map((breed) => {
        return (
          <div key={breed.id} className="bg-slate-300 rounded-lg p-2 m-2 w-[20em]">
            <Link href={`/results/${breed.id}`} className='text-xl text-zinc-800 font-semibold border-b pb-1 border-b-green-700'>{breed.name}</Link>
            <div className="flex flex-col gap-2 mt-4">
              <div className="w-[200px] h-[200px] truncate grid justify-center">
                <Image
                  id={breed.image.id}
                  src={breed.image.url}
                  width={breed.image.width}
                  height={breed.image.height}
                  alt={breed.name}
                  unoptimized
                />
              </div>
              {breed.bred_for ? <p>Breed for: {breed.bred_for}</p> : ''}
              {breed.breed_group ? (
                <p>Breed group is: {breed.breed_group}</p>
              ) : (
                ''
              )}
              {breed.temperament ? <p>Temperament: {breed.temperament}</p> : ''}
              {breed.description ? <p>Description: {breed.description}</p> : ''}
              {breed.origin ? <p>Origin is: {breed.origin}</p> : ''}
              {breed.weight.metric ? (
                <p>Weight: {breed.weight.metric} kg</p>
              ) : (
                ''
              )}
              {breed.height.metric ? (
                <p>Height: {breed.height.metric} cm</p>
              ) : (
                ''
              )}
              {breed.life_span ? (
                <p>Live span is: {breed.life_span} average</p>
              ) : (
                ''
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
  return content;
}
