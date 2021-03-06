import { Component, OnInit } from '@angular/core';
import { ProductsCartService } from '../products-cart.service';
import { Products } from './products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Products[] = [
    {
      product: "Cuadro",
      description: "Decoración de interiores",
      price:1500,
      stock:4,
      image: "assets/img/cuadro.jpg",
      settlement: false,
      quantity:0,
    },
    {
      product: "Agenda",
      description: "Papelera de oficina",
      price:564,
      stock:0,
      image: "assets/img/agenda-negra-frente.jpg",
      settlement: true,
      quantity:0,
    },
    {
      product: "cuadro",
      description: "Decoración de interiores",
      price:2530,
      stock:6,
      image: "assets/img/cuadro-simpe.jpg",
      settlement: false,
      quantity:0,
    },
  ];

  constructor(private cart: ProductsCartService) { 
  }

  ngOnInit(): void {
  }

  maxReached(m: string){
    alert(m);
  }

  addToCart(product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
