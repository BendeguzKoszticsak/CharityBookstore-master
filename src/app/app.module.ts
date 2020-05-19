import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { ShoppingcartComponent } from './shop/shop.component';
import { ProductListComponent } from './shop/product-list.component';
import { ShoppingCartComponent } from './shop/shopping-cart.component';
import { ProductComponent }  from './shop/product.component';
import { CartProductComponent } from './shop/cart-product.component';
import { AddTutorialComponent } from './shop/add-book.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CongratsComponent } from './congrats/congrats.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [ShoppingCartComponent,ProductComponent, CartProductComponent,AddTutorialComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DragdropComponent,
    ShoppingcartComponent,
    PuzzleComponent,
    ProductListComponent,
    OrderdetailsComponent,
    CongratsComponent,
    NotfoundComponent
  ],
  imports: [FormsModule,HttpClientModule, ReactiveFormsModule,HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
