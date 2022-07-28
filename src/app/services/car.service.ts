import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44394/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getcardetail";
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
 }

 getCarByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl + "cars/getbrandid?brandId="+brandId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarByColourId(colourId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl + "cars/getbycolour?colourId="+colourId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarByBrandAndColour(brandId:number,colourId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl + "cars/getbyfilter?brandId="+brandId +"&colourId="+colourId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

add(car:Car):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
}

}

