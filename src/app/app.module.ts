import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AdminComponent } from './components/middleDesk/admin/admin.component';
import { CompanyComponent } from './components/middleDesk/company/company.component';
import { ClientComponent } from './components/middleDesk/client/client.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/middleDesk/home/home.component';
import { MiddleDeskComponent } from './components/middle-desk/middle-desk.component';
import { LoginComponent } from './components/sideMenu/login/login.component';
import { AdminMenuComponent } from './components/sideMenu/admin-menu/admin-menu.component';
import { CompanyMenuComponent } from './components/sideMenu/company-menu/company-menu.component';
import { CustomerMenuComponent } from './components/sideMenu/customer-menu/customer-menu.component';
import { LogoutBtnComponent } from './components/sideMenu/logout-back-btn/logout-btn.component';
import { SearchingByComponent } from './components/middleDesk/searching-by/searching-by.component';
import { AddCompanyComponent } from './components/middleDesk/adminMenu/add-company/add-company.component';
import { AddCustomerComponent } from './components/middleDesk/adminMenu/add-customer/add-customer.component';
import { HttpClientModule} from '@angular/common/http';
import { GetAllCompaniesComponent } from './components/middleDesk/adminMenu/get-all-companies/get-all-companies.component';
import { FindCompanyComponent } from './components/middleDesk/adminMenu/find-company/find-company.component';
import { GetAllCustomersComponent } from './components/middleDesk/adminMenu/get-all-customers/get-all-customers.component';
import { FindCustomerComponent } from './components/middleDesk/adminMenu/find-customer/find-customer.component';
import { DeleteOutdatedCouponsComponent } from './components/middleDesk/adminMenu/delete-outdated-coupons/delete-outdated-coupons.component';
import { AddCouponComponent } from './components/middleDesk/companyMenu/add-coupon/add-coupon.component';
import { GetAllCouponsComponent } from './components/middleDesk/companyMenu/get-all-coupons/get-all-coupons.component';
import { FindCompanyCouponComponent } from './components/middleDesk/companyMenu/find-company-coupon/find-company-coupon.component';
import { UpdateCompanyComponent } from './components/middleDesk/companyMenu/update-company/update-company.component';
import { GetAllCustomerCouponsComponent } from './components/middleDesk/customerMenu/get-all-customer-coupons/get-all-customer-coupons.component';
import { FindCouponComponent } from './components/middleDesk/customerMenu/find-coupon/find-coupon.component';
import { UpdateCustomerComponent } from './components/middleDesk/customerMenu/update-customer/update-customer.component';
import { GetAllAvailableCouponsComponent } from './components/middleDesk/customerMenu/get-all-available-coupons/get-all-available-coupons.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    AdminComponent,
    CompanyComponent,
    ClientComponent,
    SearchComponent,
    HomeComponent,
    MiddleDeskComponent,
    LoginComponent,
    AdminMenuComponent,
    CompanyMenuComponent,
    CustomerMenuComponent,
    LogoutBtnComponent,
    SearchingByComponent,
    AddCompanyComponent,
    AddCustomerComponent,
    GetAllCompaniesComponent,
    FindCompanyComponent,
    GetAllCustomersComponent,
    FindCustomerComponent,
    DeleteOutdatedCouponsComponent,
    AddCouponComponent,
    GetAllCouponsComponent,
    FindCompanyCouponComponent,
    UpdateCompanyComponent,
    GetAllCustomerCouponsComponent,
    FindCouponComponent,
    UpdateCustomerComponent,
    GetAllAvailableCouponsComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
