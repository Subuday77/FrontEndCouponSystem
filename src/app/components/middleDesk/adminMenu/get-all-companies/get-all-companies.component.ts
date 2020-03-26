import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {
  public companies: Observable<Company[]>;

  public id: String = null;
  public name: String = null;
  public email: String = null;
  public uid: String = null;
  constructor(private adminService: AdminService, private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {
    this.updateData();
  }

  deleteCompany(id: number) {
    console.log(id, this.loginService.token)

    this.adminService.deleteCompany(id, this.loginService.token).subscribe(() => {
      console.log("Company deleted");

    });
    alert("Company " + id + " deleted");
    this.updateData();
  }

  companyInfo(id: number) {
    console.log(id, this.loginService.token)
    this.router.navigate(['', { outlets: { middle: ['companyInfo', id] } }])
  }

  updateCompany(id: number) {
    console.log(id, this.loginService.token)
    this.router.navigate(['', { outlets: { middle: ['updateCompanyCommon', id] } }])
  }

  findCompany() {
    console.log(this.loginService.token)
    this.adminService.findCompany(this.id, this.name, this.email, this.uid, this.loginService.token).subscribe((result) => {

      this.companies = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
    if ((this.id === null || this.id === undefined || this.id.toString() === "") && (this.name === null || this.name === undefined || this.name === "") && (this.email === null || this.email === undefined || this.email === "") && (this.uid === null || this.uid === undefined || this.uid === "")) {
      alert("Search parameters doesn't set!")
      this.updateData()
    }
  }

  clear() {
    this.id = null;
    this.name = null;
    this.email = null;
    this.uid = null;
    this.updateData()
  }

  updateData(): void {
    this.adminService.getAllCompanies(this.loginService.token).subscribe((result) => {
      this.companies = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

}
