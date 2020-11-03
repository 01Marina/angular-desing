import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products ={
    "product": "Cuadro",
    "description": "Decoración de interiores",
    "price":1500,
    "stock":43,
    "image": "assets/img/cuadro.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
