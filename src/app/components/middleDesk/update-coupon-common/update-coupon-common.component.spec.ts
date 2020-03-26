import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCouponCommonComponent } from './update-coupon-common.component';

describe('UpdateCouponCommonComponent', () => {
  let component: UpdateCouponCommonComponent;
  let fixture: ComponentFixture<UpdateCouponCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCouponCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCouponCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
