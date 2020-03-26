import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <a>
          <img src="assets/coupon-envelope.png">
    </a>
    
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
