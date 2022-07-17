import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  constructor(private rentalDetailService:RentalDetailService) { }

  rentalDetails:RentalDetail[]=[];
  currentRentalDetail:RentalDetail;
  dataLoaded=false;

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail(){
    this.rentalDetailService.getRentalDetail().subscribe(response=>{
      this.rentalDetails=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentRental(rentalDetail:RentalDetail){
    this.currentRentalDetail=rentalDetail;
  }

  getCurrentRentalClass(rentalDetail:RentalDetail){
    if (rentalDetail==this.currentRentalDetail) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
