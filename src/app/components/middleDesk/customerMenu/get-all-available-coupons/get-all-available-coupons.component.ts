import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';
import { LoginService } from 'src/app/services/login.service';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-available-coupons',
  templateUrl: './get-all-available-coupons.component.html',
  styleUrls: ['./get-all-available-coupons.component.css']
})
export class GetAllAvailableCouponsComponent implements OnInit {

  public coupons: Observable<Coupon[]>;
  public price: number;
  public priceToSend: number = -1;
  public category: String;
  constructor(private customerService: CustomerService, private loginService: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.updateData(this.loginService.id);
  }

  purchaseCoupon(couponid: number) {
    console.log(couponid, this.loginService.token)

    this.customerService.purchaseCoupon(couponid, this.loginService.id, this.loginService.token).subscribe(() => {

    }, (error) => {
      if (error.status > 200) {
        alert(error.error);
      } else {
        alert("Coupon purchased");
      }
    });
  }

  findCoupons() {
    this.priceToSend = -1;
    
    console.log(this.loginService.token)

    if (!(this.price === undefined || this.price === null || this.price.toString() === "")) {
      this.priceToSend = this.price;
      console.log(this.price);
      console.log(this.priceToSend);

    }
    
    
    if ((this.price === undefined || this.price === null || this.price.toString() === "") && (this.category === undefined || this.category === null)) {
      alert("Search parameters doesn't set!");
      this.updateData(this.loginService.id);
    }
     
    else {
      this.customerService.findCoupons(this.loginService.id,this.priceToSend, this.category, this.loginService.token).subscribe((result) => {
        this.coupons = result;
        console.log(result);
      }, (error) => {
        console.log(error);
      });
    }
  }
  clear() {
    this.price = null;
    this.priceToSend = -1;
    this.category = undefined;

    this.updateData(this.loginService.id)
  }

  updateData(id: number): void {
    this.customerService.getAllAvaliabeCoupons(id, this.loginService.token).subscribe((result) => {
      this.coupons = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

}
