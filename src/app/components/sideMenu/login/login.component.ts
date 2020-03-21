import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginResult } from 'src/app/models/login-result';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as uuid from 'uuid';

// export function back() {
//     if (this.serverRes==="admin"){
//         this.router.navigate([{outlets:{side:'admin-menu'}}]);
//         // this.logout=true;
//         }
//         else if (this.serverRes==="company"){
//           this.router.navigate([{outlets:{side:'company-menu'}}]);
//           // this.logout=true;
//         }
//         else if (this.serverRes==="customer"){
//           this.router.navigate([{outlets:{side:'customer-menu'}}]);
//           // this.logout=true;
//         }
// }


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public position: String = '';
  public serverRes: String = '';
  public email: String = '';
  public password: String = '';
  public logout: boolean = true;
  public err: boolean = true;

  public constructor(private router: Router, private loginService: LoginService, private http: HttpClient) { }

  ngOnInit() {
  }
  public loginMethod(): void {
    console.log(this.email + " " + this.password + " " + this.position);
    this.serverRes = this.position;
    if (this.serverRes === "admin") {
      this.loginService.login(this.email, this.password, 0).subscribe((loginResult) => {
        this.loginService.id = loginResult.subjectId;
        this.loginService.token = loginResult.token;
        this.loginService.accessLevel = loginResult.accessLevel;
        console.log(loginResult);
        this.successfulLoginAdmin();
        
      }, (error) => {
        this.unsuccsessfulLogin();
      })
      
    }
    else if (this.serverRes === "company") {
      this.loginService.login(this.email, this.password, 1).subscribe((loginResult) => {
        this.loginService.id = loginResult.subjectId;
        this.loginService.token = loginResult.token;
        this.loginService.accessLevel = loginResult.accessLevel;
        console.log(loginResult);
        this.successfulLoginCompany()
      }, (error) => {
        this.unsuccsessfulLogin()
      })

      
    }
    else if (this.serverRes === "customer") {

      this.loginService.login(this.email, this.password, 2).subscribe((loginResult) => {
        this.loginService.id = loginResult.subjectId;
        this.loginService.token = loginResult.token;
        this.loginService.accessLevel = loginResult.accessLevel;
        console.log(loginResult);
        this.successfulLoginCusomer();
      }, (error) => {
        this.unsuccsessfulLogin()
      })

    }

  }
  unsuccsessfulLogin() {
    this.router.navigate([{ outlets: { side: 'app-login' } }]);
    console.log(console.error());
    alert("Invalid credentials.")
  }
  successfulLoginAdmin() {
    this.router.navigate([{ outlets: { side: 'admin-menu' } }]);
  }
  successfulLoginCompany() {
    this.router.navigate([{ outlets: { side: 'company-menu' } }]);
  }
  successfulLoginCusomer() {
    this.router.navigate([{ outlets: { side: 'customer-menu' } }]);
  }
}
