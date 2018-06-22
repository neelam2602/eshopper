import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {CrudService} from './crud.service';
import { RouterModule, Routes } from '@angular/router';
import {
FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturedComponent } from './featured/featured.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', component: FeaturedComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'brand',      component: BrandComponent },
  { path: 'category',      component: CategoryComponent },
  { path: 'product',      component: ProductComponent },
  { path: 'cart',      component: CartComponent },
  { path: 'logout',      component: LogoutComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SidebarComponent,
    FeaturedComponent,
    LoginComponent,
    RegisterComponent,
    BrandComponent,
    CategoryComponent,
    ProductComponent,
    CartComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
