import { AdminService } from './../../../../shared/service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  delete(id:number){
    this.adminService.deleteCompany(id);
  }

}
