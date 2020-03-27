import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  // public email: String;
  // public name: String;
  // public password: String;
  public rpassword: String;
  public psserr: boolean = false;
  public required: boolean = true;
  public company: Company = new Company();
  constructor(private adminService: AdminService, private customerService: CustomerService, private loginService: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addCompany() {
    if (this.company.name === undefined ||
      this.company.name === "" ||
      this.company.email === undefined ||
      this.company.email === "" ||
      this.company.password === undefined ||
      this.company.password === "" ||
      this.rpassword === undefined ||
      this.rpassword === "") {
      this.required = false;
    } else {
      this.required = true;
    }
    console.log(this.company.name,  this.company.email, this.company.password, this.rpassword, this.required)
    if (this.company.password != this.rpassword) {
      alert("Password misfits. Please, retype password.")
      this.clearPassword();
      this.psserr = true;
    }
    if (this.required) {
      this.adminService.addCompany(this.company, this.loginService.token).subscribe(() => {

      }, (error) => {
        if (error.status > 200) {
          alert(error.error.text);
        } else {

          alert("Company added");
          this.clear();
        }
      });
    } else {
      if (!this.psserr) {
        alert("Some data is missing")
      }
    }
    this.psserr = false;
  }
  clear() {

    this.company.name = undefined;
    this.company.email = undefined;
    this.company.password = undefined;
    this.rpassword = undefined;
    this.required = true;
    this.psserr = false;
  }
  clearPassword() {
    this.company.password = undefined;
    this.rpassword = undefined;
    this.required = false;

  }
}
