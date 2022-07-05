import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from 'src/app/models/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  colours:Colour[]=[];
  dataloaded=false;

  constructor(private colourService:ColourService) { }

  ngOnInit(): void {
    this.getColours();
  }

  getColours(){
    this.colourService.getColours().subscribe(response=>{
      this.colours=response.data;
      this.dataloaded=true;
    })
  }

}
