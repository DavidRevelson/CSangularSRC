import { Coupon } from './../../../../shared/model/coupon.model';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../shared/service/company.service';

@Component({
  selector: 'app-read-coupon',
  templateUrl: './read-coupon.component.html',
  styleUrls: ['./read-coupon.component.css']
})
export class ReadCouponComponent implements OnInit {

  selectedCoupon:{selected:Coupon};
  showCoupon:boolean = false;

  constructor(private companyService : CompanyService) {
    this.companyService.readCoupon(1);
    this.selectedCoupon = this.companyService._SelectedCoupon;
   }

  ngOnInit() {
  }

  readCoupon(id:number){
    this.companyService.readCoupon(id);
    this.showCoupon = true;
  }

}
