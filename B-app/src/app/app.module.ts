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
import {HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { TrimPipe } from './pipes/trim.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { BiggerTrimPipe } from './pipes/bigger-trim.pipe';
import { HttpRequestInterceptor } from './interceptor/http-request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Trim1Pipe } from './pipes/trim1.pipe';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { RequestsHomeComponent } from './components/requests-home/requests-home.component';
import { VendorLayoutComponent } from './layouts/vendor-layout/vendor-layout.component';
import { NavbarVendorComponent } from './components/navbar-vendor/navbar-vendor.component';
import { BookServiceFormComponent } from './components/book-service-form/book-service-form.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AllSessionsComponent } from './components/all-sessions/all-sessions.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryByIdComponent } from './components/sub-category-by-id/sub-category-by-id.component';
import { ProductsByIdComponent } from './components/products-by-id/products-by-id.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BiggestTrimPipe } from './pipes/biggest-trim.pipe';

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
    ProviderDetailsComponent,
    TrimPipe,
    LoaderComponent,
    BiggerTrimPipe,
    CheckoutComponent,
    Trim1Pipe,
    VendorLoginComponent,
    RequestsHomeComponent,
    VendorLayoutComponent,
    NavbarVendorComponent,
    BookServiceFormComponent,
    FilterProductsPipe,
    AllOrdersComponent,
    AllSessionsComponent,
    CategoryComponent,
    SubCategoryByIdComponent,
    ProductsByIdComponent,
    OrderDetailsComponent,
    ProductDetailsComponent,
    BiggestTrimPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 

  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
