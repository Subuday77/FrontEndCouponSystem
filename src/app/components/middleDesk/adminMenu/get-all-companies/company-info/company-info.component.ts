import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  public company: Company;
  public id = -1;

  constructor(private adminService: AdminService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.findCompanyById(this.id)
  }
  findCompanyById(id: number) {
    this.adminService.findCompanyById(this.id, this.loginService.token).subscribe((result) => {
      this.company = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

}