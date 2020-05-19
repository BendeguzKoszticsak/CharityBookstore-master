import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'cart-product',
  template: `
   <div *ngIf="product">
     <div>{{product.Name}}</div>
     <div class="col-4 col-sm-4 col-md-4">
     <div class="quantity" id ="right" >
         <input [(ngModel)]="product.num" min="0" (ngModelChange)="modelChanged($event)" type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty" size="4">
     </div>
     </div>
  `,
  styles: [`
  :host > div{
    display: grid;
    grid-template-columns: 1fr 20px;
    grid-column-gap: 5px;
    padding: 30px;
    padding-left: 200px;
    padding-right: 350px;
  }
  div:nth-child(1) {font-weight: bold;}
  `]
})
export class CartProductComponent  {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  modelChanged(product) {
     if (this.product.num === 0) {
      this.productRemoved.emit(this.product)
     }
  }
}