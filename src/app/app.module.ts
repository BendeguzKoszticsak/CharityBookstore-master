import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { NgDragDropModule } from 'ng-drag-drop';

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
import { initializeApp } from 'firebase';
import { environment } from 'src/environments/environment';


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
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCNNyNhtF_3JAzYHbDSIpCtPMbfZmSL87s",
      authDomain: "bookstore-2594a.firebaseapp.com",
      databaseURL: "https://bookstore-2594a.firebaseio.com",
      projectId: "bookstore-2594a",
      storageBucket: "bookstore-2594a.appspot.com",
      messagingSenderId: "108650393473",
      appId: "1:108650393473:web:68c413bc8a5c6144934280",
      measurementId: "G-TWWZQP4PYD"
    }),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgDragDropModule.forRoot()
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
