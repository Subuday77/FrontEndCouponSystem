import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  //  public title:String;
  //  public description:String;
  //  public startDate:Date;
  //  public endDate:Date;
  //  public amount:number;
  //  public price:number;
  //  public image:String;
  //  public category:String;
  public required: boolean = true;
  public coupon: Coupon = new Coupon();

  constructor(private companyService: CompanyService, private loginService: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  addCoupon() {
    this.coupon.companyId = this.loginService.id;
    if (this.coupon.title === undefined ||
      this.coupon.title === "" ||
      this.coupon.description === undefined ||
      this.coupon.description === "" ||
      this.coupon.startDate === undefined ||
      this.coupon.endDate === undefined ||
      this.coupon.amount === undefined ||
      this.coupon.amount === null ||
      this.coupon.price === undefined ||
      this.coupon.price === null ||
      this.coupon.category === undefined) {
      this.required = false;
    } else {
      this.required = true;
    }
    console.log(this.coupon.title,
      this.coupon.description,
      this.coupon.startDate,
      this.coupon.endDate,
      this.coupon.amount,
      this.coupon.price,
      this.coupon.category,
      this.required)
    if (this.required) {
      this.companyService.addCoupon(this.coupon, this.loginService.token).subscribe(() => {

      }, (error) => {
        if (error.status > 200) {
          alert(error.error.text);
        } else {
          alert("Coupon added");
          this.clear();
        }
      });
    } else {
      alert("Some data is missing")
    }

  }
  clear() {
    this.coupon.title = undefined;
    this.coupon.description = undefined;
    this.coupon.startDate = undefined;
    this.coupon.endDate = undefined;
    this.coupon.amount = undefined;
    this.coupon.price = undefined;
    this.coupon.image = undefined;
    this.coupon.category = undefined;
  }
}
