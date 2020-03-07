import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCouponComponent } from './find-coupon.component';

describe('FindCouponComponent', () => {
  let component: FindCouponComponent;
  let fixture: ComponentFixture<FindCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
