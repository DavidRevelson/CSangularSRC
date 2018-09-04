import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../shared/service/customer.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  constructor(private customerService : CustomerService) { }

  ngOnInit() {
  }

  purchase(id){
    this.customerService.PurchaseCoupon(id);
  }

}
