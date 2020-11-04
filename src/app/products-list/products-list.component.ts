import { Component, OnInit } from '@angular/core';
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
      image: "assets/img/cuadro.png",
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
      image: "assets/img/cuadro-simpe.png",
      settlement: false,
      quantity:0,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  downQuantity(product: Products): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  upQuantity(product: Products): void {
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }
}
