import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-tutorial',
  template: `
  <ul class="list-group">
    <li 
      *ngFor="let post of productList"
      class="list-group-item">
      {{post.Name}}    
    </li>
  </ul>
    `,
    styles: [``]
})
export class AddTutorialComponent  {
  productList: any[];

  constructor(http:Http) { 
    http.get('ec2-3-86-28-129.compute-1.amazonaws.com:3000/books')
      .subscribe(response=>{
        this.productList = response.json();
      });
  }
}
  