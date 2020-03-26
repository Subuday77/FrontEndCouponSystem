import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  public company: Company;
  public id = this.loginService.id;
  public rpassword: String;
  public psserr: boolean = false;
  public ucompany: Company = new Company();
  constructor(private adminService: AdminService, private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id']
    this.findCompanyById(this.id)
  }

  findCompanyById(id:number) {
    this.adminService.findCompanyById(this.id, this.loginService.token).subscribe((result) => {
      this.company = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
  updateCompany(id: number) {
    console.log(id, this.loginService.token)
    this.router.navigate(['', { outlets: { middle: ['updateCompanyCommon', id] } }])
  }
}
