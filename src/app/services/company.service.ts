import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public id:number;
  public token=uuid.v4();

  constructor(private httpCompany:HttpClient) { }

  getAllCoupons(id:number,token=uuid.v4()):Observable<any> {
    return this.httpCompany.get('http://localhost:8080/company/findcouponsbycompanyid?id='+id+'&token='+token);
  }
  deleteCoupon (id:number, token=uuid.v4()){
  return this.httpCompany.request('delete','http://localhost:8080/company/deletecoupon?id='+id+'&token='+token);
  }
  
}
