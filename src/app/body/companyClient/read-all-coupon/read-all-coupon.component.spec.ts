import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllCouponComponent } from './read-all-coupon.component';

describe('ReadAllCouponComponent', () => {
  let component: ReadAllCouponComponent;
  let fixture: ComponentFixture<ReadAllCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAllCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAllCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
