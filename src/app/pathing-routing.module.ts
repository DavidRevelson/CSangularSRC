import { AllCouponsComponent } from './body/customerClient/all-coupons/all-coupons.component';
import { ReadPurchasedCouponComponent } from './body/customerClient/read-purchased-coupon/read-purchased-coupon.component';
import { PurchaseCouponComponent } from './body/customerClient/purchase-coupon/purchase-coupon.component';
import { ReadCouponComponent } from './body/companyClient/read-coupon/read-coupon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './body/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './body/adminClient/admin/admin.component';
import { CreateCompanyComponent } from './body/adminClient/create-company/create-company.component';
import { CreateCustomerComponent } from './body/adminClient/create-customer/create-customer.component';
import { DeleteCompanyComponent } from './body/adminClient/delete-company/delete-company.component';
import { DeleteCustomerComponent } from './body/adminClient/delete-customer/delete-customer.component';
import { ReadCompanyComponent } from './body/adminClient/read-company/read-company.component';
import { ReadCustomerComponent } from './body/adminClient/read-customer/read-customer.component';
import { ReadCompaniesComponent } from './body/adminClient/read-companies/read-companies.component';
import { ReadCustomersComponent } from './body/adminClient/read-customers/read-customers.component';
import { UpdateCompanyComponent } from './body/adminClient/update-company/update-company.component';
import { UpdateCustomerComponent } from './body/adminClient/update-customer/update-customer.component';
import { AdminGuard } from './admin.guard';
import { CompanyComponent } from './body/companyClient/company/company.component';
import { CreateCouponComponent } from './body/companyClient/create-coupon/create-coupon.component';
import { DeleteCouponComponent } from './body/companyClient/delete-coupon/delete-coupon.component';
import { UpdateCouponComponent } from './body/companyClient/update-coupon/update-coupon.component';
import { ReadAllCouponComponent } from './body/companyClient/read-all-coupon/read-all-coupon.component';
import { CustomerComponent } from './body/customerClient/customer/customer.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate:[AdminGuard],
    component: AdminComponent,
    children: [
      {
        path: 'createCompany',
        component: CreateCompanyComponent
      },
      {
        path: 'createCustomer',
        component: CreateCustomerComponent
      },
      {
        path: 'deleteCompany',
        component: DeleteCompanyComponent
      },
      {
        path: 'deleteCustomer',
        component: DeleteCustomerComponent
      },
      {
        path: 'readCompany',
        component: ReadCompanyComponent
      },
      {
        path: 'readCustomer',
        component: ReadCustomerComponent
      },
      {
        path: 'readCompanies',
        component: ReadCompaniesComponent
      },
      {
        path: 'readCustomers',
        component: ReadCustomersComponent
      },
      {
        path: 'updateCompany',
        component: UpdateCompanyComponent
      },
      {
        path: 'updateCustomer',
        component: UpdateCustomerComponent
      },
    ]
  },
  {
    path:'company',
    component: CompanyComponent,
    children:[
      {
        path: 'createCoupon',
        component: CreateCouponComponent
      },
      {
        path:'deleteCoupon',
        component:DeleteCouponComponent
      },
      {
        path:'readCoupon',
        component:ReadCouponComponent
      },
      {
        path:'readAllCoupons',
        component: ReadAllCouponComponent
      },
      {
        path:'updateCoupon',
        component:UpdateCouponComponent
      },
    ]
  },
  {
    path:'customer',
    component:CustomerComponent,
    children:[
      {
        path:'purchase',
        component:PurchaseCouponComponent
      },
      {
        path:'readMyCoupons',
        component:ReadPurchasedCouponComponent
      },
      {
        path:'readAllCoupons',
        component:AllCouponsComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
  {
path:'**',
component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PathingRoutingModule { }
export const routingComponents = [LoginComponent, MenuComponent , PageNotFoundComponent]
export const adminOptionComponents = [AdminComponent,CreateCompanyComponent, CreateCustomerComponent, DeleteCompanyComponent, DeleteCustomerComponent, ReadCompanyComponent, ReadCustomerComponent, ReadCompaniesComponent, ReadCustomersComponent, UpdateCompanyComponent, UpdateCustomerComponent]
export const companyOptionComponents = [CompanyComponent,CreateCouponComponent,DeleteCouponComponent,UpdateCouponComponent,ReadCouponComponent,ReadCouponComponent,ReadAllCouponComponent]
export const customerOptionComponents = [CustomerComponent,PurchaseCouponComponent,ReadPurchasedCouponComponent,AllCouponsComponent]