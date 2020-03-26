import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {
  public id: number;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.id = this.loginService.id;
    console.log(this.id)
  }
}
