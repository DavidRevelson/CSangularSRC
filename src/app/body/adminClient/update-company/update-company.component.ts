import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../shared/service/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  updateComp(id:number,password:string,email:string){
    this.adminService.updateCompany(id,password,email);
  }

}
