import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingByComponent } from './searching-by.component';

describe('SearchingByComponent', () => {
  let component: SearchingByComponent;
  let fixture: ComponentFixture<SearchingByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
