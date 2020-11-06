import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';

import { FormsModule } from '@angular/forms';
import { DesingProductsComponent } from './desing-products/desing-products.component';
import { DesingContactComponent } from './desing-contact/desing-contact.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { HomeDesingComponent } from './home-desing/home-desing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CarritoDeComprasComponent,
    DesingProductsComponent,
    DesingContactComponent,
    InputQuantityComponent,
    HomeDesingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
