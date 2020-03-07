import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCompanyCouponComponent } from './find-company-coupon.component';

describe('FindCompanyCouponComponent', () => {
  let component: FindCompanyCouponComponent;
  let fixture: ComponentFixture<FindCompanyCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCompanyCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCompanyCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
