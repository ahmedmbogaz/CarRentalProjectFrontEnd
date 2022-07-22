import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColourPipe } from './pipes/filter-colour.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

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
    FilterPipePipe,
    FilterBrandPipe,
    FilterColourPipe,
    CartSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
