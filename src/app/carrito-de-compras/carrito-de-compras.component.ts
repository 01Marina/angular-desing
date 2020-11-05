import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsCartService } from '../products-cart.service';
import { Products } from '../products-list/products';

@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.scss']
})
export class CarritoDeComprasComponent implements OnInit {

  cartList:Products[]=[];
  cartList$: Observable<Products[]>;

  constructor(private cart: ProductsCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
