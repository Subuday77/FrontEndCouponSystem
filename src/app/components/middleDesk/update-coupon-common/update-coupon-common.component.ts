import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-update-coupon-common',
  templateUrl: './update-coupon-common.component.html',
  styleUrls: ['./update-coupon-common.component.css']
})
export class UpdateCouponCommonComponent implements OnInit {
  public coupon: Coupon;
  public id = -1;
  public ucoupon: Coupon = new Coupon();
  public isError: boolean = false;
  constructor(private adminService: AdminService, private companyService: CompanyService, private loginService: LoginService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.findCouponById(this.id)
  }
  findCouponById(id: number) {
    this.companyService.findCouponById(this.id, this.loginService.id, this.loginService.token).subscribe((result) => {
      this.coupon = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
  updateCoupon() {
    if (this.ucoupon.title === undefined &&
      this.ucoupon.description === undefined &&
      this.ucoupon.startDate === undefined &&
      this.ucoupon.endDate === undefined &&
      this.ucoupon.amount === undefined &&
      this.ucoupon.price === undefined &&
      this.ucoupon.image === undefined &&
      this.ucoupon.category === undefined) {
      this.isError = true;
    }
    if (this.ucoupon.price <= 0) {
      alert("Invalid price!");
      this.ucoupon.price = undefined;
      this.isError = true;
    }
    if (this.ucoupon.amount <= 0) {
      alert("Invalid amount!");
      this.ucoupon.amount = undefined;
      this.isError = true;
    }
    if (this.ucoupon.endDate < this.coupon.startDate) {
      alert("End date can't be before start date!");
      this.ucoupon.endDate = undefined;
      this.isError = true;
    }
    this.ucoupon.id = this.coupon.id;
    this.ucoupon.uid = this.coupon.uid;
    this.ucoupon.companyId = this.coupon.companyId;
    console.log(this.ucoupon.title, this.ucoupon.description, this.ucoupon.amount, this.ucoupon.price);
    if (!this.isError) {
      this.companyService.updateCoupon(this.ucoupon, this.loginService.token).subscribe(() => {

      }, (error) => {

        alert(error.error.text);
        this.findCouponById(this.id)
        this.clear();
      });
    }
    this.isError = false;
  }
  clear() {


    this.ucoupon.title = undefined;
    this.ucoupon.description = undefined;
    this.ucoupon.startDate = undefined;
    this.ucoupon.endDate = undefined;
    this.ucoupon.amount = undefined;
    this.ucoupon.price = undefined;
    this.ucoupon.image = undefined;
    this.ucoupon.category = undefined;
  }
}
