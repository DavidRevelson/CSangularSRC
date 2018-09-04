import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCouponComponent } from './read-coupon.component';

describe('ReadCouponComponent', () => {
  let component: ReadCouponComponent;
  let fixture: ComponentFixture<ReadCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
