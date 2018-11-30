import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from './general.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProductComponent } from './manage-products/add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUserComponent } from './manage-users/admin-user/admin-user.component';
import { PortalUserComponent } from './manage-users/portal-user/portal-user.component';
import { ProductTableComponent } from './manage-products/product-table/product-table.component';
import { ViewOrderComponent } from './manage-orders/view-order/view-order.component';
import { EditOrderComponent } from './manage-orders/edit-order/edit-order.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    AddProductComponent,
    AdminLoginComponent,
    AdminUserComponent,
    PortalUserComponent,
    ProductTableComponent,
    ViewOrderComponent,
    EditOrderComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, GeneralService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
