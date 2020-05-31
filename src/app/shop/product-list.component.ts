import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  template: `
  <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
    <h2><strong>Books </strong></h2>
  </div>
  <div>
  <product *ngFor="let product of products" [product]="product" (productAdded)="addProductToCart($event)"></product>
  </div>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ProductListComponent  {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
