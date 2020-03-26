import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { Company } from '../models/company';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public id: number;
  public token = uuid.v4();


  constructor(private httpAdmin: HttpClient) { }

  getAllCompanies(token = uuid.v4()): Observable<any> {
    return this.httpAdmin.get('http://localhost:8080/admin/getallcompanies?token=' + token);
  }
  deleteCompany(id: number, token = uuid.v4()) {
    return this.httpAdmin.delete('http://localhost:8080/admin/deletecompany?id=' + id + '&token=' + token);

  }
  getAllCustomers(token = uuid.v4()): Observable<any> {
    return this.httpAdmin.get('http://localhost:8080/admin/getallcustomers?token=' + token);
  }
  deleteCustomers(id: number, token = uuid.v4()) {
    return this.httpAdmin.delete('http://localhost:8080/admin/deletecustomer?id=' + id + '&token=' + token);
  }
  deleteOutdatedCoupons(token = uuid.v4()) {
    return this.httpAdmin.delete('http://localhost:8080/admin/cleanup?token=' + token);
  }
  findCompanyById(id: number, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.get('http://localhost:8080/admin/getcompanybyid?id=' + id + '&token=' + token);
  }
  findCustomerById(id: number, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.get('http://localhost:8080/admin/getcustomerbyid?id=' + id + '&token=' + token);
  }
  findCompany(id: String, name: String, email: String, uid: String, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.get('http://localhost:8080/admin/getcompany?id=' + id + '&name=' + name + '&email=' + email + '&uid=' + uid + '&token=' + token);
  }
  findCustomer(id: String, firstName: String, lastName: String, email: String, uid: String, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.get('http://localhost:8080/admin/getcustomers?id=' + id + '&firstname=' + firstName + '&lastname=' + lastName + '&email=' + email + '&uid=' + uid + '&token=' + token);
  }
  addCustomer(customer: Customer, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.post('http://localhost:8080/admin/addcustomer?token=' + token, customer);
  }
  addCompany(company: Company, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.post('http://localhost:8080/admin/addcompany?token=' + token, company);
  }
  updateCompany(company: Company, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.put('http://localhost:8080/admin/updatecompany?token=' + token, company);
  }
  updateCustomer(customer: Customer, token = uuid.v4()): Observable<any> {
    return this.httpAdmin.put('http://localhost:8080/admin/updatecustomer?token=' + token, customer);
  }
}
