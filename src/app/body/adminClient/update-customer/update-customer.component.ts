import { AdminService } from './../../../../shared/service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  changePassword(id:number,pass:string){
    this.adminService.updateCustomer(id,pass);
  }

}
