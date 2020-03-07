import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginResult } from 'src/app/models/login-result';

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
  public error:boolean=true;

  public constructor(private router: Router, private loginService: LoginService) { }

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
        
      }, (error) => {
        
        this.router.navigate([{ outlets: { side: 'app-login' } }]);
        console.log(error);
      })
      
      this.router.navigate([{ outlets: { side: 'admin-menu' } }]);
      // this.logout=true;
    }
    else if (this.serverRes === "company") {
      this.loginService.login(this.email, this.password, 1).subscribe((loginResult) => {
        this.loginService.id = loginResult.subjectId;
        this.loginService.token = loginResult.token;
        this.loginService.accessLevel = loginResult.accessLevel;
        console.log(loginResult);
        
      }, (error) => {
        
        this.router.navigate([{ outlets: { side: 'app-login' } }]);
        console.log(error);
      })

      this.router.navigate([{ outlets: { side: 'company-menu' } }]);
      // this.logout=true;
    }
    else if (this.serverRes === "customer") {

      this.loginService.login(this.email, this.password, 2).subscribe((loginResult) => {
        this.loginService.id = loginResult.subjectId;
        this.loginService.token = loginResult.token;
        this.loginService.accessLevel = loginResult.accessLevel;
        console.log(loginResult);
        
      }, (error) => {
        
        this.router.navigate([{ outlets: { side: 'app-login' } }]);
        console.log(error);
      })

      this.router.navigate([{ outlets: { side: 'customer-menu' } }]);
      // this.logout=true;
    }

  }
  //  public back():void {
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
  //  }
}
