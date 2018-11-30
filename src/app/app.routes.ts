import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminUserComponent } from './manage-users/admin-user/admin-user.component';
import { PortalUserComponent } from './manage-users/portal-user/portal-user.component';
import { AddProductComponent } from './manage-products/add-product/add-product.component';
import { ProductTableComponent } from './manage-products/product-table/product-table.component';
import { ViewOrderComponent } from './manage-orders/view-order/view-order.component';
import { EditOrderComponent } from './manage-orders/edit-order/edit-order.component';
import {ChartsComponent} from './charts/charts.component';

const routes: Routes = [
    { path: 'morris-chart',       component: ChartsComponent },
    { path: 'edit-order',       component: EditOrderComponent },
    { path: 'view-order',       component: ViewOrderComponent },
    { path: 'add-product',      component: AddProductComponent },
    { path: 'view-products',    component: ProductTableComponent },
    { path: 'users-manager',    component: PortalUserComponent },
    { path: 'admin-manager',    component: AdminUserComponent },
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'admin-login',      component: AdminLoginComponent },
    { path: '',                 redirectTo: 'admin-login', pathMatch: 'full' },
    { path: '**',               redirectTo: 'admin-login', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
