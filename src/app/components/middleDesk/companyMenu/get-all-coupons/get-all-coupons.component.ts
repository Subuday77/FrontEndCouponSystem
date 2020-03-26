import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  public coupons: Observable<Coupon[]>;
  public price: number;
  public priceToSend: number = -1;
  public category: String;
  constructor(private companyService: CompanyService, private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {
    this.updateData(this.loginService.id);
  }
  deleteCoupon(id: number) {
    console.log(id, this.loginService.token)


    this.companyService.deleteCoupon(id, this.loginService.token).subscribe(() => {
      console.log(id, this.loginService.token);
    });
    alert("Coupon " + id + " deleted");
    this.updateData(this.loginService.id);
  }
  updateCoupon(id:number){
    console.log(id, this.loginService.token)
    this.router.navigate(['', { outlets: { middle: ['updateCouponCommon', id] } }])
  }
  findCoupons() {
    this.priceToSend = -1;
    console.log(this.priceToSend);
    console.log(this.loginService.token)

    if (!(this.price === undefined || this.price === null || this.price.toString() === "")) {
      this.priceToSend = this.price;
    }
    if (this.category === undefined || this.category === null) {
      this.companyService.findCouponsByPrice(this.priceToSend, this.loginService.id, this.loginService.token).subscribe((result) => {
        this.coupons = result;
        console.log(result);
      }, (error) => {
        console.log(error);
      });
      if ((this.price === undefined || this.price === null || this.price.toString() === "") && (this.category === undefined || this.category === null)) {
        alert("Search parameters doesn't set!");
        this.updateData(this.loginService.id);
      }
    } else {
      this.companyService.findCoupons(this.priceToSend, this.category, this.loginService.id, this.loginService.token).subscribe((result) => {
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
    this.companyService.getAllCoupons(id, this.loginService.token).subscribe((result) => {
      this.coupons = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
