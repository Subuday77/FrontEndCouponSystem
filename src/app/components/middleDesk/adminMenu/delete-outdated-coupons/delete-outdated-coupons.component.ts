import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-outdated-coupons',
  templateUrl: './delete-outdated-coupons.component.html',
  styleUrls: ['./delete-outdated-coupons.component.css']
})
export class DeleteOutdatedCouponsComponent implements OnInit {

  constructor(private adminService: AdminService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.deleteOutdatedCoupons();

  }
  deleteOutdatedCoupons(): void {
    this.adminService.deleteOutdatedCoupons(this.loginService.token).subscribe();

  }
}

