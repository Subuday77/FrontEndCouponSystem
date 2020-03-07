import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleDeskComponent } from './middle-desk.component';

describe('MiddleDeskComponent', () => {
  let component: MiddleDeskComponent;
  let fixture: ComponentFixture<MiddleDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
