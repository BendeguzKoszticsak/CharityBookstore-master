import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'product',
  template: `
  <div class="pb-5">
    <div class="container">

      <div class="row py-5 p-4 bg-white rounded shadow-sm">
  <div class="col-12 col-sm-12 col-md-2 text-center">

          <img class="img-responsive" src="{{product.Picture}}" alt="prewiew" width="80" height="120">
          <button type="button" class="likebtn" mat-button (click)="like()">{{Like}} {{product.LikeCount}}</button>

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
      <div class="price">
          <h4><strong>Price {{product.Price}}Kr </strong></h4>
      </div>
      <div >

      </div>
      <div class="col-20 col-sm-20 col-md-20 text-right">
        <button type="button" class="btn" mat-button  (click)="addProductToCart(product)">Add To Cart</button>
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
  .btn {
    top: 5px;
    right:1px;
    margin-top: 15px;
    background-color: #3f51b5;
    color: white;
  }
  .likebtn {
    margin-top: 45px;
    background-color: #3f51b5;
    color: white;
    margin-top:20px;
    position: relative;
  }
  .price {
  margin-top: -5px;
  margin-right: 15px;

  }

  div:nth-child(1) {font-weight: bold;}
  `]
})
export class ProductComponent  {
  constructor(private http:Http){}
  liked = false
  Like = "Like"
  Number = 10
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
  like(){
    if (!this.liked){
      this.Like = "DisLike"
      this.liked = true
      this.product.LikeCount +=1
      this.http.put('http://ec2-3-86-28-129.compute-1.amazonaws.com:3000/books/plus/'+ this.product.id, JSON.stringify  )
        .subscribe(response => {
          console.log(response.json());
        })
    }
    else{
      this.Like = "Like"
      this.liked = false
      this.product.LikeCount -=1
      this.http.put('http://ec2-3-86-28-129.compute-1.amazonaws.com:3000/books/minus/'+ this.product.id, JSON.stringify  )
      .subscribe(response => {
        console.log(response.json());
      })
    }
  }
}
