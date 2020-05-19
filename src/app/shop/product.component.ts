import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  template: `
  <div class="row">
  <div class="col-12 col-sm-12 col-md-2 text-center">
          <img class="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="120" height="80">
  </div>
  <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
      <h4 class="product-name"><strong>{{product.Name}}</strong></h4>
      <h4>
          <small>Book description</small>
          <h5>{{product.Description}}</h5>
      </h4>
  </div>
  <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
      <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
          <h6><strong>Price {{product.Price}}Kr </strong></h6>
      </div>
      <div class="col-20 col-sm-20 col-md-20 text-right">
        <button type="button" class="btn btn-primary btn-sm" (click)="addProductToCart(product)">Add To Cart</button>
      </div>
  </div>
  <div>

  
  `,
  styles: [`
  :host {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 20px;
    padding: 20px;
  }
  div:nth-child(1) {font-weight: bold;}
  `]
})
export class ProductComponent  {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}