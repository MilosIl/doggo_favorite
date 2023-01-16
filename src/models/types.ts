export interface GetBreedResults {
  breeds: Breeds[];
}

export interface Breeds {
  weight: Eight;
  height: Eight;
  id: number;
  name: string;
  bredFor?: string;
  breedGroup?: BreedGroup;
  lifeSpan: string;
  temperament?: string;
  origin?: string;
  referenceImageID: string;
  image: Image;
  countryCode?: CountryCode;
  description?: string;
  history?: string;
}

export type BreedGroup =
  | 'Toy'
  | 'Hound'
  | 'Terrier'
  | 'Working'
  | 'Mixed'
  | ''
  | 'Non-Sporting'
  | 'Sporting'
  | 'Herding';

export type CountryCode = 'AG' | 'US' | 'AU';

export interface Eight {
  imperial: string;
  metric: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
