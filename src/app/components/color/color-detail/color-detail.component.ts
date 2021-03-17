import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css'],
})
export class ColorDetailComponent implements OnInit {
  colorCars: Car[] = [];
  dataLoaded = false;
  title = 'Color Cars Detail';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarByColor(params['colorId']);
    });
  }

  getCarByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.colorCars = response.data;
      this.dataLoaded = true;
    });
  }
}
