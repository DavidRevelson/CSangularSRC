import { CompanyService } from './../../../../shared/service/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.companyService.deleteCoupon(id);
    alert("Coupon with id " + id + " has been deleted");
  }

}
