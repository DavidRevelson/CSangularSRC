import { loginService } from './../../../../shared/service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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
