import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { Company } from '../models/company';

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
}
