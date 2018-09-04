import { CustomerService } from './../../../../shared/service/customer.service';
import { Component, OnInit } from '@angular/core';
import { CouponList } from '../../../../shared/model/coupon.model';

@Component({
  selector: 'app-read-purchased-coupon',
  templateUrl: './read-purchased-coupon.component.html',
  styleUrls: ['./read-purchased-coupon.component.css']
})
export class ReadPurchasedCouponComponent implements OnInit {

  selected="ALL";
  showTable:boolean=false;
  showSearch:boolean=true;
  LocalCoupons:CouponList;

  constructor(private customerService: CustomerService) {
    this.customerService.readAllPurchasedCoupon();
    this.LocalCoupons = this.customerService._Coupons;
   }

  ngOnInit() {
  }

  toggle(){
    this.showSearch = !this.showSearch;
    this.showTable = !this.showTable;
  }


  search(option,query){

    switch (option) {
      case "ALL":
      this.customerService.readAllPurchasedCoupon();
      this.toggle();
      break;
      case "PRICE":
      this.customerService.readAllPurchasedCouponByPrice(query);
      this.toggle();
      break;
    case "DISABLED":
    case undefined:
    case null:
    console.log("wrong format");
    break;
      default:
      this.customerService.readAllPurchasedCouponByType(option);
      this.toggle();
        break;
    }

  }

}
