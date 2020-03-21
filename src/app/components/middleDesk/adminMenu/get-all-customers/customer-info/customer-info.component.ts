import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  public customer: Customer;
  public id = -1;
  constructor(private adminService: AdminService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.findCustomerById(this.id)
  }
  findCustomerById(id: number) {
    this.adminService.findCustomerById(this.id, this.loginService.token).subscribe((result) => {
      this.customer = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
