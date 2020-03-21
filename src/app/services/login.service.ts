import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { LoginResult } from '../models/login-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

public id:number;
public token=uuid.v4();
public accessLevel:number=-1;

  constructor(private httpLogin:HttpClient) { }

  login (email:String,password:String,type:number) :Observable <any> {
    return this.httpLogin.post('http://localhost:8080/login?email='+email+'&password='+password+'&type='+type,null);
  
    
  }
  
  logout (token=uuid.v4()) : Observable <any> {
    return this.httpLogin.delete('http://localhost:8080/login/logout?token='+token);
    
  }
}
