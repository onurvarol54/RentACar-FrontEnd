import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalListModel } from '../models/rentalListModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44398/api/rentals/getrentaldetails';

  constructor(private httpClient: HttpClient) {}

  getRentalDetail(): Observable<RentalListModel> {
    return this.httpClient.get<RentalListModel>(this.apiUrl);
  }
}
