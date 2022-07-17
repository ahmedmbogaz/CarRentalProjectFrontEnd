import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44394/api/"

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColour(colourId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcolourid?colourId="+colourId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + '/api/cars/getcardetailbyid?id=' + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
