import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../products-list/products';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit {

  constructor() { }

  @Input() quantity: number;
  @Input() maxStock: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.maxStock) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Llegaste al máximo del stock.")
    }
  }

  amountEntered(event): void {
    //if(product.quantity==null){
    if (event.key == '-' || event.key == '+' || event.key == 'e') {
      event.preventDefault();
      this.quantity=0;
      this.quantityChange.emit(this.quantity);
    }
  }

}
