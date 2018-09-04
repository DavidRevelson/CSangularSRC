import { Button } from './../../shared/model/button.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  buttonArr:Button[] = [new Button("Menu", "/menu", "home"), new Button("Login", "/login", "supervisor_account")];

  constructor() {
   }

  ngOnInit() {
  }


}
