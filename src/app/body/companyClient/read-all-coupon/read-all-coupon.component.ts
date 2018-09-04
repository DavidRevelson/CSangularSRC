import { CouponList } from './../../../../shared/model/coupon.model';
import { CompanyService } from './../../../../shared/service/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-all-coupon',
  templateUrl: './read-all-coupon.component.html',
  styleUrls: ['./read-all-coupon.component.css']
})
export class ReadAllCouponComponent implements OnInit {

  selected = "ALL";
  showTable: boolean = false;
  showSearch: boolean = true;
  LocalCoupons: CouponList;

  constructor(private companyService: CompanyService) {
    this.LocalCoupons = this.companyService._Coupons;
  }

  ngOnInit() {
  }

  toggle() {
    this.showSearch = !this.showSearch;
    this.showTable = !this.showTable;
  }

  search(option, query) {

    switch (option) {
      case "ALL":
        this.companyService.readAllCoupon();
        this.toggle();
        break;
      case "PRICE":
        this.companyService.readCouponByPrice(query);
        this.toggle();
        break;
      case "DISABLED":
      case undefined:
      case null:
        console.log("wrong format");
        break;
      default:
        this.companyService.readCouponByType(option);
        this.toggle();
        break;
    }

  }

}
