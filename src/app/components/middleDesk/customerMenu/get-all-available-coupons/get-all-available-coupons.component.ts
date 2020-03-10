import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';
import { LoginService } from 'src/app/services/login.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-all-available-coupons',
  templateUrl: './get-all-available-coupons.component.html',
  styleUrls: ['./get-all-available-coupons.component.css']
})
export class GetAllAvailableCouponsComponent implements OnInit {

  public coupons:Observable<Coupon[]>;

  constructor(private customerService: CustomerService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.updateData(this.loginService.id);
  }

  purchaseCoupon(couponid:number){
    console.log(couponid,this.loginService.token)
     
    this.customerService.purchaseCoupon(couponid,this.loginService.id,this.loginService.token).subscribe(() => {
    console.log("Coupon purchased");
      
  });
  
}

  updateData(id:number):void {
    this.customerService.getAllAvaliabeCoupons(id,this.loginService.token).subscribe((result) => {
      this.coupons = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

}
