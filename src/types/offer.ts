import { City } from './city.ts';
import { Location } from './location.ts';
import { Host } from './host.ts';

export type TOffer = {
  id: string;
  title: string;
  type: string; //заменить на Enum
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[]; //заменить на Enum
  host: Host;
  previewImage: string;
  maxAdults: number;
}
