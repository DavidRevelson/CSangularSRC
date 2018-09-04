import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCompaniesComponent } from './read-companies.component';

describe('ReadCompaniesComponent', () => {
  let component: ReadCompaniesComponent;
  let fixture: ComponentFixture<ReadCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
