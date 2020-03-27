import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  // public firstName: String;
  // public lastName: String;
  // public email: String;
  // public password: String;
  public rpassword: String;
  public psserr: boolean = false;
  public required: boolean = true;
  public customer: Customer = new Customer();
  constructor(private adminService: AdminService, private customerService: CustomerService, private loginService: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  addCustomer() {
    if (this.customer.firstName === undefined ||
      this.customer.firstName === "" ||
      this.customer.lastName === undefined ||
      this.customer.lastName === "" ||
      this.customer.email === undefined ||
      this.customer.email === "" ||
      this.customer.password === undefined ||
      this.customer.password === "" ||
      this.rpassword === undefined ||
      this.rpassword === "") {
      this.required = false;
    } else {
      this.required = true;
    }
    console.log(this.customer.firstName, this.customer.lastName, this.customer.email, this.customer.password, this.rpassword, this.required)
    if (this.customer.password != this.rpassword) {
      alert("Password misfits. Please, retype password.")
      this.clearPassword();
      this.psserr = true;
    }
    if (this.required) {
      this.adminService.addCustomer(this.customer, this.loginService.token).subscribe(() => {

      }, (error) => {
        if (error.status > 200) {
          alert(error.error.text);
        } else {

          alert("Customer added");
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
    this.customer.firstName = undefined;
    this.customer.lastName = undefined;
    this.customer.email = undefined;
    this.customer.password = undefined;
    this.rpassword = undefined;
    this.required = true;
    this.psserr = false;
  }
  clearPassword() {
    this.customer.password = undefined;
    this.rpassword = undefined;
    this.required = false;

  }
}
