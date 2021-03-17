import { CarImage } from './carImage';

export interface Car {
  id: number;
  brandId: number;
  brandName: string;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  descriptions: string;
  carImages: CarImage[];
}
