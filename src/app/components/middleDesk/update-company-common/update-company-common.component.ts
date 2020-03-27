import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
@Component({
  selector: 'app-update-company-common',
  templateUrl: './update-company-common.component.html',
  styleUrls: ['./update-company-common.component.css']
})
export class UpdateCompanyCommonComponent implements OnInit {
  public company: Company;
  public id = -1;
  public rpassword: String = undefined;
  public psserr: boolean = false;
  public ucompany: Company = new Company();
  constructor(private adminService: AdminService, private companyService: CompanyService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.findCompanyById(this.id)
  }
  findCompanyById(id: number) {
    if (this.loginService.accessLevel===0){
    this.adminService.findCompanyById(this.id, this.loginService.token).subscribe((result) => {
      this.company = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }else {
    this.companyService.findCompanyById(this.id, this.loginService.token).subscribe((result) => {
      this.company = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}

  updateCompany() {
    this.ucompany.id = this.company.id;
    this.ucompany.uid = this.company.uid;

    console.log(this.ucompany.name, this.ucompany.email, this.ucompany.password, this.rpassword);
    if (this.ucompany.password != this.rpassword) {
      alert("Password misfits. Please, retype password.")
      this.clearPassword();
      this.psserr = true;
    }
    
    if (!this.psserr){
      if (this.loginService.accessLevel===0){
    this.adminService.updateCompany(this.ucompany, this.loginService.token).subscribe(() => {

    }, (error) => {

      alert(error.error.text);
      this.findCompanyById(this.id)
      this.clear();
    });
  }else{
    this.companyService.updateCompany(this.ucompany, this.loginService.token).subscribe(() => {

    }, (error) => {

      alert(error.error.text);
      this.findCompanyById(this.id)
      this.clear();
    });
  }
  }
    this.psserr = false;
  }
  clear() {

    this.ucompany.name = undefined;
    this.ucompany.email = undefined;
    this.ucompany.password = undefined;
    this.rpassword = undefined;

    this.psserr = false;
  }
  clearPassword() {
    this.ucompany.password = undefined;
    this.rpassword = undefined;


  }
}


