import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private carDetailService: CarDetailService,
    private activatedPoute: ActivatedRoute,private carImageService: CarImageService,
  ) {}

  carDetails: CarDetail[] = [];
  carImages: CarImage[] = []
  dataLoaded = false;

  ngOnInit(): void {
    this.activatedPoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } 
      else if (params['colourId']) {
        this.getCarsByColour(params['colourId']);
      }
      else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe((result) => {
      this.carDetails = result.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carDetailService.getCarsByBrand(brandId).subscribe((result) => {
      this.carDetails = result.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColour(colourId: number) {
    this.carDetailService.getCarsByColour(colourId).subscribe((result) => {
      this.carDetails = result.data;
      this.dataLoaded = true;
    });
  }
}
