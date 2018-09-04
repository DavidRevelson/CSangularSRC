import { CustomerList } from './../../../../shared/model/customer.model';
import { AdminService } from './../../../../shared/service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-customers',
  templateUrl: './read-customers.component.html',
  styleUrls: ['./read-customers.component.css']
})
export class ReadCustomersComponent implements OnInit {

  LocalCustomers:CustomerList;

  constructor(private adminService : AdminService) {
    this.adminService.readAllCustomer();
    this.LocalCustomers = this.adminService._Customers;
   }

  ngOnInit() {
    console.log(this.LocalCustomers);
  }

}
