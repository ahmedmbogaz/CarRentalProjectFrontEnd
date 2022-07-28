import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { ColourComponent } from './components/colour/colour.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColourPipe } from './pipes/filter-colour.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    CategoryComponent,
    NaviComponent,
    CarDetailComponent,
    RentalDetailComponent,
    ColourComponent,
    CarImageComponent,
    OneCarDetailComponent,
    FilterBrandPipe,
    FilterColourPipe,
    CartSummaryComponent,
    FilterCarPipe,
    CarAddComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
   
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
