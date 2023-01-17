import { Breeds } from '@/models/types';

const base: Breeds = {
  countryCode: 'US',
  description: '',
  history: '',
  weight: { imperial: '6 - 13', metric: '3 - 6' },
  height: {
    imperial: '9 - 11.5',
    metric: '23 - 29',
  },
  id: 1,
  name: 'Affenpinscher',
  bredFor: 'Small rodent hunting, lapdog',
  breedGroup: 'Toy',
  lifeSpan: '10-12 years',
  origin: 'Germany, France',
  temperament: 'Stubborn, Curious, Playful, Adventurous, Active, Fun-loving',
  referenceImageID: '',
  image: {
    height: 10,
    id: '',
    url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
    width: 10,
  },
};

export const mockDogCardProps = {
  base,
};
