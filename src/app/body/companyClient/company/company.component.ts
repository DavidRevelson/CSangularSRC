import { loginService } from './../../../../shared/service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  showUser : boolean = true;
  uname:string = sessionStorage.getItem("uname");

  constructor(private loginService : loginService) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logOut();
  }

  toggleUser(){
    this.showUser = false;
  }

}
