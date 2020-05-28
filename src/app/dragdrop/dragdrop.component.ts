import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent  {
  yourumber : any[];
  result: Observable<any[]>;
  Counter = 0;
  constructor(cupon: AngularFireDatabase) { 
    this.result = cupon.list('/Drag&Drop').valueChanges();
    this.result.subscribe(val => {this.yourumber = val[val.length - 1]['__id']
    });
  
    
  }

  vegetables = [
    {name: 'Poverty only affects people in 3rd world countries', type: 'vegetable'},
    {name: 'Conflict and War has nothing to do with poverty', type: 'vegetable'},
    {name: 'You can be born in poverty but you cannot end up living in poverty', type: 'vegetable'},
    {name: 'Denmark is a part of the countries with the highest poverty rate', type: 'vegetable'}];

  fruits = [
    {name: 'Inequality and Marginalisation are a cause of poverty', type: 'fruit'},
    {name: 'Poor education can lead to generational poverty', type: 'fruit'},
    {name: 'Poverty refers to individuals who live on less than 1.25$ a day', type: 'fruit'},
    {name: 'Generational poverty cannot be attributed to one individual in particular', type: 'fruit'}];

  droppedFruits = [];
  droppedVegetables = [];
  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  onFruitDrop(e: DropEvent) {
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.fruits);
    this.Counter += 1;
  }

  onVegetableDrop(e: DropEvent) {
    this.droppedVegetables.push(e.dragData);
    this.removeItem(e.dragData, this.vegetables);
    this.Counter += 1;
  }

  onAnyDrop(e: DropEvent) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

}


  

