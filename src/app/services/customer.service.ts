import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public id: number;
  public token = uuid.v4();

  constructor(private httpCustomer: HttpClient) { }

  getAllAvaliabeCoupons(id: number, token = uuid.v4()): Observable<any> {
    return this.httpCustomer.get('http://localhost:8080/customer/getallcoupons?id=' + id + '&token=' + token);
  }
  getAllCustomerCoupons(id: number, token = uuid.v4()): Observable<any> {
    return this.httpCustomer.get('http://localhost:8080/customer/getcoupons?id=' + id + '&token=' + token);
  }
  purchaseCoupon(couponid: number, customerid: number, token = uuid.v4()): Observable<any> {
    return this.httpCustomer.put('http://localhost:8080/customer/purchase?couponid=' + couponid + '&customerid=' + customerid + '&token=' + token, null);
  }
  findCoupons(id: number, price: number, category: String, token = uuid.v4()): Observable<any> {
    return this.httpCustomer.get('http://localhost:8080/customer/findallcouponsbypriceandcategory?id=' + id + '&price=' + price + '&category=' + category + '&token=' + token);

  } findCustomerCoupons(id: number, price: number, category: String, token = uuid.v4()): Observable<any> {
    return this.httpCustomer.get('http://localhost:8080/customer/findcouponsbypriceandcategory?id=' + id + '&price=' + price + '&category=' + category + '&token=' + token);
  }
  findCustomerById(id: number, token = uuid.v4()): Observable<any> {
    return this.httpCustomer.get('http://localhost:8080/customer/getcustomerbyid?id=' + id + '&token=' + token);
  }
  updateCustomer(customer: Customer, token = uuid.v4()): Observable<any> {
    return this.httpCustomer.put('http://localhost:8080/customer/updatecustomer?token=' + token, customer);
  }
}
