import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../../shared/service/admin.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private adminService:AdminService) {
  }
  ngOnInit() {
  }

  createCust(name,pass){
    this.adminService.createCustomer(name,pass);
   }

}
