import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(private httpAdmin:HttpClient) { }

getAllCompanies(token:String):Observable<any> {
  return this.httpAdmin.get('http://localhost:8080/admin/getallcompanies?token='+token);
}
deleteCompany (id:number, token:String):Observable<any>{
return this.httpAdmin.request('delete','http://localhost:8080/admin/deletecompany?id='+id+'&token='+token);
}


}
