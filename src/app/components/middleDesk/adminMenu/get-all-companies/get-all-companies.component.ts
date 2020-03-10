import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {
  public companies: Observable<Company[]>;
  constructor(private adminService: AdminService, private loginService: LoginService) {

  }
  
  ngOnInit(): void {
    this.updateData();
  }

  deleteCompany(id:number){
    console.log(id,this.loginService.token)
     
    this.adminService.deleteCompany(id,this.loginService.token).subscribe(() => {
    console.log("Company deleted");
      
  });
  this.updateData();
}

  updateData():void {
    this.adminService.getAllCompanies(this.loginService.token).subscribe((result) => {
      this.companies = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
