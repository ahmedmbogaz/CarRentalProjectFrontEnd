import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  rentalDetails:RentalDetail[]=[];
  currentRental:RentalDetail;
  constructor(private rentalDetailService:RentalDetailService) { }

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail(){  
    this.rentalDetailService.getRentalDetail().subscribe(response=>{
      this.rentalDetails=response.data
    })
  }

  setCurrentRental(rentalDetails:RentalDetail){
    this.currentRental=rentalDetails;
  }

  getCurrentRentalClass(rentalDetails:RentalDetail){
    if (rentalDetails==this.currentRental) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
