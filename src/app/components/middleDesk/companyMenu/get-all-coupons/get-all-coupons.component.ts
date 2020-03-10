import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  public coupons: Observable<Coupon[]>;
  constructor(private companyService: CompanyService, private loginService: LoginService) {

  }
  
  ngOnInit(): void {
    this.updateData(this.loginService.id);
  }
  deleteCoupon(id:number){
    console.log(id,this.loginService.token)
    
    
    this.companyService.deleteCoupon(id,this.loginService.token).subscribe(()=> {
    console.log(id,this.loginService.token);
  });
    this.updateData(this.loginService.id);
  }

  updateData(id:number):void {
    this.companyService.getAllCoupons(id, this.loginService.token).subscribe((result) => {
      this.coupons = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
