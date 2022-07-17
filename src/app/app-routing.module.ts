import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDetailComponent},
  {path:"cars",component:CarDetailComponent},
  {path:"cars/brand/:brandId",component:CarDetailComponent},
  {path:"cars/colour/:colourId",component:CarDetailComponent},
  { path:'car/:carId',  component:OneCarDetailComponent  },
  { path:'cars/:carId',  component:CarDetailComponent  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
