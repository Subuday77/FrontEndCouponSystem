import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyCommonComponent } from './update-company-common.component';

describe('UpdateCompanyComponent', () => {
  let component: UpdateCompanyCommonComponent;
  let fixture: ComponentFixture<UpdateCompanyCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompanyCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
