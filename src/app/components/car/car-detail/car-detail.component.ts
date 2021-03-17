import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { CarImage } from 'src/app/models/carImage';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarDetailComponent implements OnInit {
  carDetail: Car;
  photos: CarImage[] = [];
  imageUrl = environment.apiURL;
  title = 'Car Detail';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private config: NgbCarouselConfig
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetailsByCarId(params['carId']);
      this.getCarByPhotos(params['carId']);
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carDetail = response.data;
      // this.photos = response.data.carImages;
      console.log(response.data);
      //console.log(response.data.carImages);
    });
  }

  getCarByPhotos(carId: number) {
    this.carService.getCarByPhotos(carId).subscribe((response) => {
      this.photos = response.data;
      this.config.interval = 10000;
      this.config.wrap = false;
      this.config.keyboard = false;
      this.config.pauseOnHover = false;
      console.log(response.data);
    });
  }
}
