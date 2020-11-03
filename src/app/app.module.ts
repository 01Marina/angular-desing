import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CarritoDeComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
