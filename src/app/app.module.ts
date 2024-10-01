import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFilterPipe,
    Ejemplo1Component,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
