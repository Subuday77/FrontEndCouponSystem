import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOutdatedCouponsComponent } from './delete-outdated-coupons.component';

describe('DeleteOutdatedCouponsComponent', () => {
  let component: DeleteOutdatedCouponsComponent;
  let fixture: ComponentFixture<DeleteOutdatedCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOutdatedCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOutdatedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
