import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-update-customer-common',
  templateUrl: './update-customer-common.component.html',
  styleUrls: ['./update-customer-common.component.css']
})
export class UpdateCustomerCommonComponent implements OnInit {
  public customer: Customer;
  public id = -1;
  public rpassword: String = "";
  public psserr: boolean = false;
  public ucustomer: Customer = new Customer();
  constructor(private adminService: AdminService, private customerService: CustomerService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.findCustomerById(this.id)
  }
  findCustomerById(id: number) {
    if (this.loginService.accessLevel === 0) {
      this.adminService.findCustomerById(this.id, this.loginService.token).subscribe((result) => {
        this.customer = result;
        console.log(result);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.customerService.findCustomerById(this.id, this.loginService.token).subscribe((result) => {
        this.customer = result;
        console.log(result);
      }, (error) => {
        console.log(error);
      });
    }
  }
  updateCustomer() {
    this.ucustomer.id = this.customer.id;
    this.ucustomer.uid = this.customer.uid;

    console.log(this.ucustomer.firstName, this.ucustomer.lastName, this.ucustomer.email, this.ucustomer.password, this.rpassword);
    if (this.ucustomer.password != this.rpassword) {
      alert("Password misfits. Please, retype password.")
      this.clearPassword();
      this.psserr = true;
    }

    if (!this.psserr) {
      if (this.loginService.accessLevel === 0) {
        this.adminService.updateCustomer(this.ucustomer, this.loginService.token).subscribe(() => {

        }, (error) => {

          alert(error.error.text);
          this.findCustomerById(this.id)
        });
      } else {
        this.customerService.updateCustomer(this.ucustomer, this.loginService.token).subscribe(() => {

        }, (error) => {

          alert(error.error.text);
          this.findCustomerById(this.id)
        });
      }
    }
    this.psserr = false;
  }
  clear() {

    this.ucustomer.firstName = undefined;
    this.ucustomer.lastName = undefined;
    this.ucustomer.email = undefined;
    this.ucustomer.password = undefined;
    this.rpassword = undefined;

    this.psserr = false;
  }
  clearPassword() {
    this.ucustomer.password = undefined;
    this.rpassword = undefined;


  }
}
