import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAvailableCouponsComponent } from './get-all-available-coupons.component';

describe('GetAllAvailableCouponsComponent', () => {
  let component: GetAllAvailableCouponsComponent;
  let fixture: ComponentFixture<GetAllAvailableCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllAvailableCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllAvailableCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
