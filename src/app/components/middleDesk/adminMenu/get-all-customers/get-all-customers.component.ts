import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public customers: Observable <Customer[]>;
  constructor(private adminService: AdminService, private loginService: LoginService) {

  }
  
  ngOnInit(): void {
    this.updateData();
  }

  deleteCustomer(id:number){
    console.log(id,this.loginService.token)
     
    this.adminService.deleteCustomers(id,this.loginService.token).subscribe(() => {
    console.log("Company deleted");
      
  });
  this.updateData();
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

