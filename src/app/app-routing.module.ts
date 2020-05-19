import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { ShoppingcartComponent} from './shop/shop.component';
import { PuzzleComponent } from './puzzle/puzzle.component'
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CongratsComponent } from './congrats/congrats.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dragdrop', component: DragdropComponent },
  { path: 'shop', component: ShoppingcartComponent },
  { path: 'shop/order/:id', component: OrderdetailsComponent},
  { path: 'puzzle', component: PuzzleComponent},
  { path: 'shop/order/congrats/:id', component: CongratsComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
