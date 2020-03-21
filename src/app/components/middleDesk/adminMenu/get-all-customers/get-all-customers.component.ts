import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public customers: Observable <Customer[]>;
  public id: String = null;
  public firstName: String = null;
  public lastName: String = null;
  public email: String = null;
  public uid: String = null;

  constructor(private adminService: AdminService, private loginService: LoginService, private router: Router) {

  }
  
  ngOnInit(): void {
    this.updateData();
  }

  deleteCustomer(id:number){
    console.log(id,this.loginService.token)
     
    this.adminService.deleteCustomers(id,this.loginService.token).subscribe(() => {
    console.log("Company deleted");
      
  });
  alert("Customer " + id + " deleted");
  this.updateData();
}
customerInfo(id: number) {
  console.log(id, this.loginService.token)
  this.router.navigate(['', { outlets: { middle: ['customerInfo', id] } }])
}

findCustomer() {
  console.log(this.loginService.token)
  this.adminService.findCustomer(this.id, this.firstName, this.lastName, this.email, this.uid, this.loginService.token).subscribe((result) => {
    this.customers = result;
    console.log(this.id, this.firstName, this.lastName, this.email, this.uid, this.loginService.token)
    console.log(result);
  }, (error) => {
    console.log(error);
  });
  if (this.id===null && this.firstName===null && this.lastName===null && this.email===null && this.uid===null){
    alert("Search parameters doesn't set!")
    this.updateData()
  }
}

clear() {
  this.id = null;
  this.firstName = null;
  this.lastName = null;
  this.email = null;
  this.uid = null;
  this.updateData()
}




  updateData():void {
    this.adminService.getAllCustomers(this.loginService.token).subscribe((result) => {
      this.customers = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}

