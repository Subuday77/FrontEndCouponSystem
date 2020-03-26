import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { Coupon } from '../models/coupon';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public id: number;
  public token = uuid.v4();

  constructor(private httpCompany: HttpClient) { }

  getAllCoupons(id: number, token = uuid.v4()): Observable<any> {
    return this.httpCompany.get('http://localhost:8080/company/findcouponsbycompanyid?id=' + id + '&token=' + token);
  }
  deleteCoupon(id: number, token = uuid.v4()) {
    return this.httpCompany.request('delete', 'http://localhost:8080/company/deletecoupon?id=' + id + '&token=' + token);
  }
  findCoupons(price: number, category: String, id: number, token = uuid.v4()): Observable<any> {
    return this.httpCompany.get('http://localhost:8080/company/findcouponsbypriceandcategory?price=' + price + '&category=' + category + '&companyid=' + id + '&token=' + token);

  }
  findCouponsByPrice(price: number, id: number, token = uuid.v4()): Observable<any> {
    return this.httpCompany.get('http://localhost:8080/company/findcouponsbyprice?price=' + price + '&companyid=' + id + '&token=' + token);
  }
  addCoupon(coupon: Coupon, token = uuid.v4()): Observable<any> {
    return this.httpCompany.post('http://localhost:8080/company/addcoupon?token=' + token, coupon);
  }
  findCompanyById(id: number, token = uuid.v4()): Observable<any> {
    return this.httpCompany.get('http://localhost:8080/company/getcompanybyid?id=' + id + '&token=' + token);
  }
  updateCompany(company: Company, token = uuid.v4()): Observable<any> {
    return this.httpCompany.put('http://localhost:8080/company/updatecompany?token=' + token, company);
  }
  findCouponById(id: number, companyid: number, token = uuid.v4()): Observable<any> {
    return this.httpCompany.get('http://localhost:8080/company/findcouponbyid?id=' + id + '&companyid=' + companyid + '&token=' + token);
  }
  updateCoupon(coupon: Coupon, token = uuid.v4()): Observable<any> {
    return this.httpCompany.put('http://localhost:8080/company/updatecoupon?token=' + token, coupon);
  }
}
