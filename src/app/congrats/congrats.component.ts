import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id ='';
  dateObj = new Date();
  date = new Date().toISOString().split('T')[0];
  hour = new Date().getHours();
  minute = new Date().getMinutes() ;

  
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
        this.getUser(this.id);
      })
  }
  getUser(id){}
  
}
