import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from '../models/colour';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  urlApi="https://localhost:44394/api/colours/getall"
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ListResponseModel<Colour>>{
    return this.httpClient.get<ListResponseModel<Colour>>(this.urlApi);
  }
}
