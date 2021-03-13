import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarListModel } from '../models/carListModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44398/api/cars/getcardetails';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarListModel> {
    return this.httpClient.get<CarListModel>(this.apiUrl);
  }
}
