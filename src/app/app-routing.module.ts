import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './components/middleDesk/home/home.component';
import { AdminComponent } from './components/middleDesk/admin/admin.component';
import { CompanyComponent } from './components/middleDesk/company/company.component';
import { ClientComponent } from './components/middleDesk/client/client.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminMenuComponent } from './components/sideMenu/admin-menu/admin-menu.component';
import { CompanyMenuComponent } from './components/sideMenu/company-menu/company-menu.component';
import { CustomerMenuComponent } from './components/sideMenu/customer-menu/customer-menu.component';
import { LoginComponent } from './components/sideMenu/login/login.component';
import { AddCompanyComponent } from './components/middleDesk/adminMenu/add-company/add-company.component';
import { AddCustomerComponent } from './components/middleDesk/adminMenu/add-customer/add-customer.component';
import { GetAllCompaniesComponent } from './components/middleDesk/adminMenu/get-all-companies/get-all-companies.component';
import { FindCompanyComponent } from './components/middleDesk/adminMenu/find-company/find-company.component';
import { GetAllCustomersComponent } from './components/middleDesk/adminMenu/get-all-customers/get-all-customers.component';
import { FindCustomerComponent } from './components/middleDesk/adminMenu/find-customer/find-customer.component';
import { DeleteOutdatedCouponsComponent } from './components/middleDesk/adminMenu/delete-outdated-coupons/delete-outdated-coupons.component';
import { AddCouponComponent } from './components/middleDesk/companyMenu/add-coupon/add-coupon.component';
import { GetAllCouponsComponent } from './components/middleDesk/companyMenu/get-all-coupons/get-all-coupons.component';

//import { FindCompanyCouponComponent } from './components/middleDesk/companyMenu/find-company-coupon/find-company-coupon.component';
import { UpdateCompanyComponent } from './components/middleDesk/companyMenu/update-company/update-company.component';
import { GetAllCustomerCouponsComponent } from './components/middleDesk/customerMenu/get-all-customer-coupons/get-all-customer-coupons.component';
//import { FindCouponComponent } from './components/middleDesk/customerMenu/find-coupon/find-coupon.component';
import { UpdateCustomerComponent } from './components/middleDesk/customerMenu/update-customer/update-customer.component';
import { GetAllAvailableCouponsComponent } from './components/middleDesk/customerMenu/get-all-available-coupons/get-all-available-coupons.component';
import { CompanyInfoComponent } from './components/middleDesk/adminMenu/get-all-companies/company-info/company-info.component';
import { CustomerInfoComponent } from './components/middleDesk/adminMenu/get-all-customers/customer-info/customer-info.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, outlet: "middle" },
  { path: 'admin', component: AdminComponent, outlet: "middle" },
  { path: 'company', component: CompanyComponent, outlet: "middle" },
  { path: 'client', component: ClientComponent, outlet: "middle" },
  { path: 'admin-menu', component: AdminMenuComponent, outlet: "side" },
  { path: 'company-menu', component: CompanyMenuComponent, outlet: "side" },
  { path: 'customer-menu', component: CustomerMenuComponent, outlet: "side" },
  { path: 'login', component: LoginComponent, outlet: "side" },
  { path: 'addCompany', component: AddCompanyComponent, outlet: "middle" },
  { path: 'getAllCompanies', component: GetAllCompaniesComponent, outlet: "middle" },
  { path: 'addCustomer', component: AddCustomerComponent, outlet: "middle" },
  { path: 'findCompany', component: FindCompanyComponent, outlet: "middle" },
  { path: 'getAllCustomers', component: GetAllCustomersComponent, outlet: "middle" },
  { path: 'findCustomer', component: FindCustomerComponent, outlet: "middle" },
  { path: 'deleteOutdatedCoupons', component: DeleteOutdatedCouponsComponent, outlet: "middle" },
  { path: 'addCoupon', component: AddCouponComponent, outlet: "middle" },
  { path: 'getAllCoupons', component: GetAllCouponsComponent, outlet: "middle" },
  { path: 'getAllAvailableCoupons', component: GetAllAvailableCouponsComponent, outlet: "middle" },
  //{ path: 'findCompanyCoupon', component: FindCompanyCouponComponent, outlet: "middle" },
  { path: 'updateCompany', component: UpdateCompanyComponent, outlet: "middle" },
  { path: 'getAllCustomerCoupons', component: GetAllCustomerCouponsComponent, outlet: "middle" },
  //{ path: 'findCoupon', component: FindCouponComponent, outlet: "middle" },
  { path: 'updateCustomer', component: UpdateCustomerComponent, outlet: "middle" },
  { path: 'companyInfo/:id', component: CompanyInfoComponent, outlet: "middle" },
  { path: 'customerInfo/:id', component: CustomerInfoComponent, outlet: "middle" },

  { path: '', component: LoginComponent, outlet: "side" },
  { path: '**', component: LoginComponent, outlet: "side" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
