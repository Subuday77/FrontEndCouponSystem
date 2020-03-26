import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerCommonComponent } from './update-customer-common.component';

describe('UpdateCustomerCommonComponent', () => {
  let component: UpdateCustomerCommonComponent;
  let fixture: ComponentFixture<UpdateCustomerCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
