import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogoutBtnComponent implements OnInit {

  constructor(private router:Router, private location:Location ) { }

  ngOnInit() {
  }
  public logout():void{
    this.router.navigate([{outlets:{side:'login', middle:'home'}}])
    
  }
  public back():void{
    this.location.back();
  }

}
