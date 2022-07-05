import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColourResponseModel } from '../models/colourResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  urlApi="https://localhost:44394/api/colours/getall"
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ColourResponseModel>{
    return this.httpClient.get<ColourResponseModel>(this.urlApi);
  }
}
