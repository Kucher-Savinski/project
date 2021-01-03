//import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './Common/shared/main-layout/main-layout.component';
import { MainPageComponent } from './Common/main-page/main-page.component';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { CartPageComponent } from './admin/cart-page/cart-page.component';
import { RegistrationComponent } from './Common/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
