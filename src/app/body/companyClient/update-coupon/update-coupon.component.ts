import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../shared/service/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  constructor(private companyService : CompanyService) { }

  ngOnInit() {
  }

  updateCoup(id,date,price){
    this.companyService.updateCoupon(id,date,price);
    alert("Coupon with id " + id + " Has been updated!");
  }

}
