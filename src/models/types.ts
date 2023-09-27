export interface Breeds {
  weight: Eight;
  height: Eight;
  id: number;
  name: string;
  bred_for: string;
  breed_group: BreedGroup;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: Image;
  country_code: CountryCode;
  description: string;
  history: string;
}
export type BreedsName = Pick<Breeds, 'name' | 'id'>;

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
  metric?: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
