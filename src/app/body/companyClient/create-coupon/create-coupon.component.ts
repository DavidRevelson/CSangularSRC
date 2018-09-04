import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../shared/service/company.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  constructor(private compService: CompanyService) { }

  ngOnInit() {
  }

  createCoup(amount, endDate, image, message, price, startDate, title, type){
    this.compService.createCoupon(amount, endDate, image, message, price, startDate, title, type);
  }

}
