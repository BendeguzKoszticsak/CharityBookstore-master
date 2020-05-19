import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit  {
  constructor(private route: ActivatedRoute, public http:Http, private router:Router){
  
  }
  Regions = ['Hovedstaden','Midtjylland','Nordjylland','Sjælland','Syddanmark'];
  bookList = [];
  orderList =[];
  booklist =[]
  id = '';
  showContent: boolean = true;
  headers = ["Name", "Price", "Amount", "FullPrice"]
  
  ngOnInit(){
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');      
        this.getOrder(this.id);  
      })
  }
  getOrder(id){
  var i=0;
  this.http.get('http://ec2-52-91-100-197.compute-1.amazonaws.com:3000/order/'+ id)
      .subscribe(response=>{
        this.orderList = response.json();
        if (response['_body'].length === 2){
          window.location.reload();
        }
        for (;this.orderList[i];){
          this.getBook(this.orderList[i].Bookid, i, this.orderList[i].Amount, this.orderList[i].Price, );

          i++;
        }
      });

    }

  
  getBook(id, i, Amount, Price){
    
    this.http.get('http://ec2-52-91-100-197.compute-1.amazonaws.com:3000/books/'+ id)
      .subscribe(response=>{
          this.bookList[i]=response.json();
          this.bookList[i][0]['FullPrice'] = Price;
          this.bookList[i][0]['Amount'] = Amount;
          this.booklist.push(this.bookList[i][0])
          console.log(this.booklist);

          
        })

      
    }
  submit(form){
    let post = { id : this.id, Address : form.value.Address, City: form.value.City, Email : form.value.Email, Name : form.value.Name, Regio : form.value.Regio, Zip : form.value.Zip}
    //window.open('mailto:koszticsakbendeguz@gmail.com?subject=subject&body=body');
    this.http.post('http://ec2-52-91-100-197.compute-1.amazonaws.com:3000/user',post)
      .subscribe(response => {
        this.Congrats()
        })
    
    
  }
  Congrats(){
    this.router.navigate(['/shop/order/congrats',this.id])
  }

  
}
