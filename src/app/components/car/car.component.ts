import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Colour } from 'src/app/models/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})


export class CarComponent implements OnInit {

  cars:Car[]=[];
  brands:Brand[]=[];
  colours:Colour[]=[];
  dataLoaded=false;
  filterText="";
  filterBrandText:number=0;
  filterColourText:number=0;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private colourService:ColourService,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private cartService:CartService,
    ) { }

  ngOnInit(): void {
    this.RunMethodByActivatedRoute();
    this.getAllColours();
    this.getAllBrands();
  }


   //add activated method for ngOnInit().
   RunMethodByActivatedRoute(){
    this.activatedRoute.params.subscribe((params)=>{
      if (params["brandId"] && params["colourId"]) {
        this.getCarByBrandAndColour(params["brandId"],params["colourId"])
      }else if (params["colourId"]) {
        this.getCarByColourId(params["colourId"])
      }else if (params["brandId"]) {
        this.getCarByBrandId(params["brandId"])
      }else{
        this.getCarDetails()
      }
    });
  }

  getCarDetails(){
     this.carService.getCarDetails().subscribe((response)=>{
       this.cars=response.data
       this.dataLoaded=true;
     });
  }

  getCarByBrandId(brandId:number){
    this.carService.getCarByBrandId(brandId).subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;

    })
  }

  getCarByColourId(colorId:number){
    this.carService.getCarByColourId(colorId).subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;

    })
  }

  getCarByBrandAndColour(brandId:number,colourId:number){
    this.carService.getCarByBrandAndColour(brandId,colourId).subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;
    })}

  

  getAllColours(){
    this.colourService.getAllColours().subscribe((response)=>{
      this.colours=response.data
    })
  }

  getAllBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }

  getSelectedBrand(brandId: number) {
    if (this.filterBrandText == brandId){
        return true;
    }else{
      return false;
    }
  }


  getSelectedColour(colourId: number) {
    if (this.filterColourText == colourId){
        return true;
   }else{
      return false;
  }
  }

  addToCart(car:Car){
   this.toastrService.success("Ekleme Gerçekleşti",car.brandName)
   this.cartService.addToCart(car);
  }
}
