import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPurchasedCouponComponent } from './read-purchased-coupon.component';

describe('ReadPurchasedCouponComponent', () => {
  let component: ReadPurchasedCouponComponent;
  let fixture: ComponentFixture<ReadPurchasedCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPurchasedCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPurchasedCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
