import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  template: `
    <div class="pb-5">
    <div class="container">
    <div class="form-group">

  <div class="py-3 p-2 bg-white rounded shadow-sm">
  <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
    <h2><strong>Your Booklist</strong></h2>
    <h5>Number of elements:({{calcTotal()}})</h5>
  </div>
  <cart-product *ngFor="let product of products" [product]="product" (productRemoved)="removeProduct($event)"><cart-product>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ShoppingCartComponent  {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return this.products.reduce((acc, prod) => acc+= prod.num ,0)
  }
  removeProduct(product) {
    this.productRemoved.emit(product)
  }
}
