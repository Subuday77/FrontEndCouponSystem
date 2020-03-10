import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-get-all-customer-coupons',
  templateUrl: './get-all-customer-coupons.component.html',
  styleUrls: ['./get-all-customer-coupons.component.css']
})
export class GetAllCustomerCouponsComponent implements OnInit {

  public coupons:Observable<Coupon[]>;

  constructor(private customerService: CustomerService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.updateData(this.loginService.id);
  }

  
  updateData(id:number):void {
    this.customerService.getAllCustomerCoupons(id,this.loginService.token).subscribe((result) => {
      this.coupons = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

}
