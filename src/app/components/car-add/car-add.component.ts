import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private carService:CarService, private toasrtService:ToastrService) { }

  ngOnInit(): void {
    this.carAddForm = new FormGroup({
      carName: new FormControl(),
      brandName: new FormControl(),
      colourName: new FormControl(),
      modelYear: new FormControl(),
      daliyPrice: new FormControl()
  });
  }

  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      carName:["",Validators.required],
      brandName:["",Validators.required],
      colourName:["",Validators.required],
      modelYear:["",Validators.required],
      daliyPrice:["",Validators.required]
    })
  }
  
  add(){
    if(this.carAddForm.valid){
      let carModel=Object.assign({},this.carAddForm.value) 
      this.carService.add(carModel).subscribe(response=>{
        this.toasrtService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toasrtService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
      
    }else{
      this.toasrtService.error("Formunuz eksik","Dikkat")
    }
  }
  
}
