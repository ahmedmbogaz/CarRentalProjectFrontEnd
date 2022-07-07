import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  constructor(private carDetailService:CarDetailService,private activatedPoute:ActivatedRoute) { }

  carDetails:CarDetail[]=[];
  dataLoaded=false;

  ngOnInit(): void {
    this.activatedPoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCarDetail();
      }
    })
  }

  getCarDetail(){
    this.carDetailService.getCarDetails().subscribe(result=>{
      this.carDetails=result.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarsByBrand(brandId).subscribe(result=>{
      this.carDetails=result.data;
      this.dataLoaded=true;
  })
  }
}
