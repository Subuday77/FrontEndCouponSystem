import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogoutBtnComponent implements OnInit {
  

  constructor(private router:Router, private location:Location, private loginService: LoginService ) { }

  ngOnInit() {
  }
  public logout() {
    
    this.loginService.logout(this.loginService.token).subscribe((result) => {
      console.log(result)
    });
    
    this.router.navigate([{outlets:{side:'login', middle:'home'}}])
    
  }
  public back():void{
    this.location.back();
  }

}
