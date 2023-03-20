import { Breeds } from '../../../models/types';
import getBreed from '../../../lib/gretBreed';


type Params = {
  params: {
    breedName: string;
  };
};

export default async function BreedPage({ params: { breedName } }: Params) {
  const breedData: Promise<Breeds> = getBreed(breedName);
  const breed = await Promise.resolve(breedData);


  return (
    <div className="m-4 p-4 bg-slate-300 rounded-lg min-w-xs h-fit " key={breed.id}>
      <h2 className="text-xl font-semibold border-b border-b-green-700 mb-2">
        Name: {breed.name}
      </h2>
      <div className="flex flex-col gap-2">
        <div>Breed for: {breed.bred_for}</div>
        <div>Breed group is: {breed.breed_group}</div>
        <div>Temperament: {breed.temperament}</div>
        <div>Description: {breed.description}</div>
        <div>Origin is: {breed.origin}</div>
        <div>Weight: {breed.weight.metric} kg</div>
        <div>Height: {breed.height.metric} cm</div>
        <div>Life span is: {breed.life_span} average</div>
      </div>

    </div>
  );
}
