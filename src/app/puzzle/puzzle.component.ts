import { Component, OnInit, ElementRef, AfterViewInit,Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable.js';
import 'jquery-ui/ui/widgets/draggable.js';
import 'jquery-ui/ui/widgets/droppable.js';


@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
@Injectable()
export class PuzzleComponent implements OnInit, AfterViewInit {
  Message = "Parent to Child"

  images: any[] = [{id: 0, image: 'isentia-1.jpg'},
                  {id: 1, image: 'isentia-2.jpg'},
                  {id: 2, image: 'isentia-3.jpg'},
                  {id: 3, image: 'isentia-4.jpg'},
                  {id: 4, image: 'isentia-5.jpg'},
                  {id: 5, image: 'isentia-6.jpg'},
                  {id: 6, image: 'isentia-7.jpg'},
                  {id: 7, image: 'isentia-8.jpg'},
                  {id: 8, image: 'isentia-9.jpg'}
  ];

  count = 0;
  result: Observable<any[]>;
  yourumber : any[];
  number = Math.floor(Math.random() * 350) + 1;
  state = [];
  win = false;


  constructor(private route: ActivatedRoute, cupon: AngularFireDatabase) { 
    this.result = cupon.list('/Games').valueChanges();
    this.result.subscribe(val => {this.yourumber = val[val.length - 1]['__id']
    });
  }

  ngOnInit() {
    this.onStart();
    
  

  }

  gameResult() {
 }

  onStart() {
    this.images.sort(function() { return 0.5 - Math.random(); });
    this.state = [];
    this.win = false;
    this.images.forEach((x) => { this.state.push(x.id); });
    
  }
 

  ngAfterViewInit() {

    $( '.draggable' ).draggable({ snap: '.grid' });

    const self = this;
    let z = 1;

    $('.droppable').droppable({
      drop: function( event, ui ) {

        self.state[event.target.id] = event.originalEvent.target.id;
        self.count++;

        let ok = true;

        for (let i = 0; i < self.state.length; i++) {
          if (self.state[i] != i) {
            ok = false;
            break;
          }
        }

        self.win = ok;
      }
    });

    $( '.draggable' ).draggable({
      start: function(e) {
        $(this).css('z-index', z++);
      },
      drag: function(e) {
      },
      stop: function(e) {
        
      }
    });
  }

}