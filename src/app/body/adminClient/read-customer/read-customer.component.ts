import { AdminService } from './../../../../shared/service/admin.service';
import { Customer } from './../../../../shared/model/customer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-customer',
  templateUrl: './read-customer.component.html',
  styleUrls: ['./read-customer.component.css']
})
export class ReadCustomerComponent implements OnInit {

  
  selectedCustomer:{selected:Customer};
  showCustomer:boolean = false;

  constructor(private adminService : AdminService) {
    this.adminService.readCustomer(1);
    this.selectedCustomer = this.adminService._SelectedCustomer;
   }

  ngOnInit() {
    
  }

  readCustomer(id:number){
    this.adminService.readCustomer(id);
    this.showCustomer = true;
  }

}
