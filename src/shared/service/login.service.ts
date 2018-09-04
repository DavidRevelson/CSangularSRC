import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Response } from '../model/response.model';

@Injectable()
export class loginService {

  loginUrl = "http://localhost:8080/CS/rest/LoginService/login?";
  currUrl = "http://localhost:4200/login";
  logoutUrl = "http://localhost:8080/CS/rest/LoginService/logOut";
  response: any = [];


  constructor(private http: HttpClient, private route: Router) {

  }

  login(username, password, clientType) {
    console.log(this.loginUrl + 'username=' + username + '&password=' + password + '&ClientType=' + clientType);
    if (username == undefined || password == undefined || clientType == undefined) {
      return;
    }
    this.http.get(this.loginUrl + 'username=' + username + '&password=' + password + '&ClientType=' + clientType).subscribe((res: Response) => {
      this.response = res;
      console.log(this.response);
      switch (res.loggedAs) {
        case "ADMIN":
          sessionStorage.setItem("type", clientType);
          sessionStorage.setItem("uname", username);
          this.route.navigate(['/admin']);
          break;
        case "COMPANY":
          sessionStorage.setItem("type", clientType);
          sessionStorage.setItem("uname", username);
          this.route.navigate(['/company']);
          break;
        case "CUSTOMER":
          sessionStorage.setItem("type", clientType);
          sessionStorage.setItem("uname", username);
          this.route.navigate(['/customer']);
          break;
        default:
          alert("username or password incorrect")
          break;
      }
    });
  }


  logOut(){
    this.http.get(this.logoutUrl).subscribe(()=>{});
    alert("You successfully logged out");
    sessionStorage.setItem("type", "LoggedOut");
    this.route.navigate(['/login']);
  }





}