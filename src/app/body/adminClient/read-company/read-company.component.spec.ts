import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCompanyComponent } from './read-company.component';

describe('ReadCompanyComponent', () => {
  let component: ReadCompanyComponent;
  let fixture: ComponentFixture<ReadCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
