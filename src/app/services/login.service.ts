import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/login-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

public id:number;
public token:String;
public accessLevel:number;

  constructor(private httpLogin:HttpClient) { }

  login (email:String,password:String,type:number) :Observable <any> {
    return this.httpLogin.post('http://localhost:8080/login?email='+email+'&password='+password+'&type='+type,null);
  
    
  }
}
