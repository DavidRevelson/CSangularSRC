import { loginService } from './../../../../shared/service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(private loginService : loginService) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logOut();
  }

}
