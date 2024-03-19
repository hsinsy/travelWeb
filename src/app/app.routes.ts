import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { ShoppingCartComponent } from './component/pages/shopping-cart/shopping-cart.component';
import { AboutPageComponent } from './component/pages/home/about-page/about-page.component';
import { KoreaTravelPageComponent } from './component/pages/home/product/korea-travel-page/korea-travel-page.component';
import { EuropeTravelPageComponent } from './component/pages/home/product/europe-travel-page/europe-travel-page.component';
import { JapanTravelPageComponent } from './component/pages/home/product/japan-travel-page/japan-travel-page.component';
import { RegisterComponent } from './component/pages/login/register.component';
import { ForgetPasswordComponent } from './component/pages/login/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/pages/login/resetpassword/resetpassword.component';
import { TravelListPageComponent } from './component/pages/home/product/travel-list-page/travel-list-page.component';
import { AdminPageComponent } from './component/pages/login/admin-page/admin-page.component';
import { ProfileComponent } from './component/pages/login/profiles/profile.component';
import { OrdersComponent } from './component/pages/login/orders/orders.component';
import { CheckOrderComponent } from './component/pages/shopping-cart/check-order/check-order.component';
import { PayokComponent } from '@component/pages/shopping-cart/payok/payok.component';

export const routes: Routes = [
  {
    path: '',
    title: 'home page',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'about page',
    component: AboutPageComponent,
  },
  {
    path: 'product/japanTravel',
    title: 'japan travel page',
    component: JapanTravelPageComponent,
  },
  {
    path: 'product/koreaTravel',
    title: 'korea travel page',
    component: KoreaTravelPageComponent,
  },
  {
    path: 'product/europeTravel',
    title: 'europe travel page',
    component: EuropeTravelPageComponent,
  },
  {
    path: 'login',
    title: 'login page',
    component: LoginComponent,
  },

  {
    path: 'register',
    title: 'register page',
    component: RegisterComponent,
  },
  {
    path: 'forgetpassword',
    title: 'forgetpassword page',
    component: ForgetPasswordComponent,
  },
  {
    path: 'resetpassword',
    title: 'resetpassword page',
    component: ResetpasswordComponent,
  },
  {
    path: 'profiles/:memberId',
    title: 'profile page',
    component: ProfileComponent,
  },
  {
    path: 'shoppingCart',
    title: 'shoppingCart page',
    component: ShoppingCartComponent,
  },
  {
    path: 'orders/:memberId',
    title: 'orderlist page',
    component: OrdersComponent,
  },
  {
    path: 'travelList',
    title: 'travelList page',
    component: TravelListPageComponent,
  },
  {
    path: 'admin',
    title: 'admin page',
    component: AdminPageComponent,
  },
  {
    path: 'checkOrder',
    title: 'checkOrder page',
    component: CheckOrderComponent,
  },
  {
    path: 'payok',
    title: 'payok page',
    component: PayokComponent,
  },
];
