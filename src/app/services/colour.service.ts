import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { Colour } from '../models/colour';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl="https://localhost:44394/api/"
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl + "colours/getall"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  
}
