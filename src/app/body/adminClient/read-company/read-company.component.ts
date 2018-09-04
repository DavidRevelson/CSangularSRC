import { AdminService } from './../../../../shared/service/admin.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../../../shared/model/company.model';

@Component({
  selector: 'app-read-company',
  templateUrl: './read-company.component.html',
  styleUrls: ['./read-company.component.css']
})
export class ReadCompanyComponent implements OnInit {

  selectedCompany:{selected:Company};
  showCompany:boolean = false;

  constructor(private adminService : AdminService) {
    this.adminService.readCompany(1);
    this.selectedCompany = this.adminService._SelectedCompany;
   }

  ngOnInit() {
    
  }

  readCompany(id:number){
    this.adminService.readCompany(id);
    this.showCompany = true;
  }


}
