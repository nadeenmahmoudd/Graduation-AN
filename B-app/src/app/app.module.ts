import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    ProfilesComponent,
    ProductsComponent,
    HomeComponent,
    NotfoundComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    CategoriesComponent,
    ServiceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
