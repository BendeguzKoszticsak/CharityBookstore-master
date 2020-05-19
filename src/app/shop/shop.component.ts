import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: 'shop.component.html',
  styles: [`:div {
    padding-right: 200px;
    padding-left: 200px;
  }`]
})
export class ShoppingcartComponent  {
  productList: any[];
  userID = Math.floor(Math.random() * 100000000) + 1;

  constructor(private http:Http) { 
    this.http.get('http://ec2-52-91-100-197.compute-1.amazonaws.com:3000/books')
      .subscribe(response=>{
        this.productList = response.json();
      });
  }
 
  cartProductList = [];
  

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({Name}) => Name === product.Name); 
      if (!productExistInCart) {
        this.cartProductList.push({...product, num:1}); 
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({Name}) => Name !== product.Name)
   
    
  }

  OrderList(){
    var i =0;
    for (;this.cartProductList[i];){
      let post = { Bookid : this.cartProductList[i].id, Amount : this.cartProductList[i].num, Price: this.cartProductList[i].num * this.cartProductList[i].Price, UserId:this.userID}
      this.http.post('http://ec2-52-91-100-197.compute-1.amazonaws.com:3000/order',post)
        .subscribe(response => {
        })
      i++;
    }
    

  }
  
}