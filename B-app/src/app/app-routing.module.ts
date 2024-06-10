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
import { CategoriesComponent } from './components/categories/categories.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RequestsHomeComponent } from './components/requests-home/requests-home.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { VendorLayoutComponent } from './layouts/vendor-layout/vendor-layout.component';
import { BookServiceFormComponent } from './components/book-service-form/book-service-form.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AllSessionsComponent } from './components/all-sessions/all-sessions.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryByIdComponent } from './components/sub-category-by-id/sub-category-by-id.component';
import { ProductsByIdComponent } from './components/products-by-id/products-by-id.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:"",component:BlankLayoutComponent, canActivate:[authGuard],children:[
  {path:"",redirectTo:'home' , pathMatch:"full"},
  {path:"home" , component:HomeComponent} ,
  {path:"about" , component:AboutComponent} ,
  {path:"cart" , component:CartComponent} ,
  {path:"profiles" , component:ProfilesComponent} ,
  {path:"products" , component:ProductsComponent} ,
  {path:"services" , component:ServicesComponent} ,
  {path:"categories" , component:CategoriesComponent},
  {path:"serviceDetails/:id",component:ServiceDetailsComponent},
  {path:"providerDetails/:id",component:ProviderDetailsComponent},
  {path:"checkout" , component:CheckoutComponent},
  {path:"bookingForm/:id" , component:BookServiceFormComponent},
  {path :"allOrder" , component:AllOrdersComponent},
  {path:"allSessions" , component:AllSessionsComponent},
  {path:"subCategory/:id" , component:SubCategoryByIdComponent},
  {path:"productsOfCategory/:id" , component:ProductsByIdComponent},
  {path:"orderDetails/:id" , component:OrderDetailsComponent},
  {path:"productDetails/:id" , component:ProductDetailsComponent},


]},
{path:"",component:AuthLayoutComponent, children:[
  {path:"",redirectTo:'signup' , pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup" , component:SignUpComponent} ,  
  {path:"vendor-login",component:VendorLoginComponent}
]},
{path:"",component:VendorLayoutComponent, children:[
  // {path:"",redirectTo:'signup' , pathMatch:"full"},
  {path:"request-home" , component:RequestsHomeComponent},
]},

{path:'**',component:NotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
