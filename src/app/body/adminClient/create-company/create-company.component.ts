import { AdminService } from './../../../../shared/service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private adminService:AdminService) {
   }

  ngOnInit() {
  }

  createComp(name,pass,email){
   this.adminService.createCompany(name,pass,email);
  }

}
