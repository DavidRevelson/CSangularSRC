import { CouponList, Coupon } from './../../../../shared/model/coupon.model';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../shared/service/customer.service';

@Component({
  selector: 'app-all-coupons',
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.css']
})
export class AllCouponsComponent implements OnInit {

  LocalCoupons: CouponList;


  constructor(private customerService: CustomerService) {
    this.customerService.readAllCoupons();
    this.LocalCoupons = this.customerService._Coupons
  }

  ngOnInit() {
  }

}
