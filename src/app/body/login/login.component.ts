import { loginService } from './../../../shared/service/login.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service:loginService) { }

  ngOnInit() {
  }

  login(username,password,clientType){
    this.service.login(username,password,clientType);
  }

}
