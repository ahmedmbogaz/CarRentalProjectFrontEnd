import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-one-car-detail',
  templateUrl: './one-car-detail.component.html',
  styleUrls: ['./one-car-detail.component.css']
})

export class OneCarDetailComponent implements OnInit {

  // oneCarDetail:CarDetail[] = [];
  dataLoaded =  false;
  constructor(
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute
  ) { }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params=>{
    //   if(params["carId"]){
    //     this.getCarDetailByCarId(params["carId"])
    //   }
    // })
  }

  // getCarDetailByCarId(carId:number){
  //   this.carDetailService.getCarDetailByCarId(carId).subscribe(response => {
  //     this.oneCarDetail = response.data;
  //     console.log(this.oneCarDetail[0])
  //     this.dataLoaded = true;
  //   })
  // }
}
