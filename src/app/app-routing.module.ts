import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",pathMatch:"full",component:CarComponent},
  {path:"cars/colour/:colourId",pathMatch:"full",component:CarComponent},
  {path:"cars/brand/:brandId/colour/:colourId", component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"cars/cardetail/:id",pathMatch:"full",component:CarDetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
