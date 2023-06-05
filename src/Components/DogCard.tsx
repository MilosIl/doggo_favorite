import { Breeds } from '../models/types';
import Image from 'next/image';

const DogCard = ({
  height,
  id,
  life_span,
  reference_image_id,
  weight,
  bred_for,
  breed_group,
  description,
  origin,
  temperament,
}: Breeds) => {
  return (
    <div
      className="m-4 py-2 bg-slate-300 rounded-lg min-w-xs min-h-fit"
      key={id}
    >
      <div className="flex justify-center mb-4 ">
        <Image
          unoptimized
          src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
          height={300}
          width={300}
          alt={reference_image_id}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        {bred_for ? <p>Breed for: {bred_for}</p> : ''}
        {breed_group ? <p>Breed group is: {breed_group}</p> : ''}
        {temperament ? <p>Temperament: {temperament}</p> : ''}
        {description ? <p>Description: {description}</p> : ''}
        {origin ? <p>Origin is: {origin}</p> : ''}
        {weight.metric ? <p>Weight: {weight.metric} kg</p> : ''}
        {height.metric ? <p>Height: {height.metric} cm</p> : ''}
        {life_span ? <p>Live span is: {life_span} average</p> : ''}
      </div>
    </div>
  );
};

export default DogCard;
