import { CustomerService } from './../shared/service/customer.service';
import { MaterialModule } from './material.module';
import { CompanyService } from './../shared/service/company.service';
import { loginService } from './../shared/service/login.service';
import { MatSnackBarModule } from '@angular/material';
import { AdminService } from './../shared/service/admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PathingRoutingModule, routingComponents, adminOptionComponents, companyOptionComponents, customerOptionComponents } from './pathing-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminGuard } from './admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    adminOptionComponents,
    companyOptionComponents,
    customerOptionComponents
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, PathingRoutingModule, HttpClientModule, FormsModule , MatSnackBarModule , MaterialModule
  ],
  providers: [AdminService, AdminGuard, loginService, CompanyService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
