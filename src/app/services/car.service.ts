import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ItemResponseModel } from '../models/ItemResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44398/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    debugger;
    console.log(brandId);
    let path = this.apiUrl + 'cars/getcarsbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }
  getCarDetailsByCarId(carId: number): Observable<ItemResponseModel<Car>> {
    let path = this.apiUrl + 'cars/getbyid?id=' + carId;
    return this.httpClient.get<ItemResponseModel<Car>>(path);
  }

  getCarByPhotos(carId: number): Observable<ListResponseModel<CarImage>> {
    let path = this.apiUrl + 'carImages/getcarphotos/' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }
  getCarsByColor(colorId: Number): Observable<ListResponseModel<Car>> {
    console.log('service', colorId);
    let path = this.apiUrl + 'cars/getcarsbycolor?id=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }
}
