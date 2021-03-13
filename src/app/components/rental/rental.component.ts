import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentalDetail: Rental[] = [];
  title = 'Rental Detail';
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.GetRentalDetail();
  }

  GetRentalDetail() {
    this.rentalService.getRentalDetail().subscribe((response) => {
      this.rentalDetail = response.data;
    });
  }
}
