import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:"",component:BlankLayoutComponent, canActivate:[authGuard],children:[
  {path:"",redirectTo:'home' , pathMatch:"full"},
  {path:"home" , component:HomeComponent} ,
  {path:"about" , component:AboutComponent} ,
  {path:"cart" , component:CartComponent} ,
  {path:"profiles" , component:ProfilesComponent} ,
  {path:"products" , component:ProductsComponent} ,
  {path:"services" , component:ServicesComponent} ,
]},
{path:"",component:AuthLayoutComponent, children:[
  {path:"",redirectTo:'signup' , pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup" , component:SignUpComponent} ,  
]},

{path:'**',component:NotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
