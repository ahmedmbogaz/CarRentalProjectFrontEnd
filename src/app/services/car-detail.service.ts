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

  apiUrl = "https://localhost:44394/api/cars/getcardetail"

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }
}
