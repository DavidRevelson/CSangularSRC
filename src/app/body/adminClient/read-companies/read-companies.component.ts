import { Company, CompanyList } from '../../../../shared/model/company.model';
import { AdminService } from './../../../../shared/service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-companies',
  templateUrl: './read-companies.component.html',
  styleUrls: ['./read-companies.component.css']
})
export class ReadCompaniesComponent implements OnInit {

  LocalCompanies: CompanyList;


  constructor(private adminService: AdminService) {
    this.adminService.readCompanies();
    this.LocalCompanies = this.adminService._Companies;
  }

  ngOnInit() {
  }



}
