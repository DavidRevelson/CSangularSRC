import { AdminService } from './../../../../shared/service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  delete(id:number){
    this.adminService.deleteCustomer(id);
  }

}
