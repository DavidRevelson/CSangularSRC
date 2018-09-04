import { Company } from './../model/company.model';
import { Customer } from './../model/customer.model';
import { CustomerList } from '../model/customer.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CompanyList } from "../model/company.model";

@Injectable()
export class AdminService {

    _Companies: CompanyList = { company: [] };
    _Customers: CustomerList = { customer: [] };
    _SelectedCompany: { selected: Company } = { selected: undefined };
    _SelectedCustomer: { selected: Customer } = { selected: undefined };
    _errorMsg: String = "OK";

    adminUrl = "http://localhost:8080/CS/rest/Admin/";

    constructor(private http: HttpClient) {
    }


    createCompany(compName: string, password: string, email: string) {
        this.http.post(this.adminUrl + 'createCompany', {
            "compName": compName,
            "password": password,
            "email": email
        }).subscribe(() => {
            alert("successfully created " + compName);
        }, (err: Error | HttpErrorResponse) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 403) {
                    //what to do when we get this error?
                    alert("Company [" + compName + "] already exist");
                    this._errorMsg = "Company [" + compName + "] already exist";
                } else {
                    alert("fail to connect to server");
                }
            }
        });
    }
    createCustomer(custName: string, password: string) {
        this.http.post(this.adminUrl + 'createCustomer', {
            "custName": custName,
            "password": password
        }).subscribe(() => {
            alert("successfully created " + custName);
        }, (err: Error | HttpErrorResponse) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 403) {
                    //what to do when we get this error?
                    alert("Customer [" + custName + "] already exist");
                    this._errorMsg = "Customer [" + custName + "] already exist";
                } else {
                    alert("fail to connect to server");
                }
            }
        });
    }

    updateCompany(id: number, password: string, email: string) {
        this.http.put(this.adminUrl + 'updateCompany', {
            "id": id,
            "password": password,
            "email": email
        }).subscribe(() => {
            alert("successfully updated Company with id : " + id);
        }, (err: Error | HttpErrorResponse) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 403) {
                    //what to do when we get this error?
                    alert("the Company you're trying to update doesnt exist");
                } else {
                    alert("fail to connect to server");
                }
            }
        });
    }
    updateCustomer(id: number, password: string) {
        this.http.put(this.adminUrl + 'updateCustomer', {
            "password": password,
            "id": id
        }).subscribe(() => {
            alert("successfully updated Customer with id : " + id);
        }, (err: Error | HttpErrorResponse) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 403) {
                    //what to do when we get this error?
                    alert("the Customer you're trying to update doesnt exist");
                } else {
                    alert("fail to connect to server");
                }
            }
        });
    }

    readCompany(id: number) {
        return this.http.post(this.adminUrl + 'readCompany', {
            "id": id
        }).subscribe((data: Company) => {
            this._SelectedCompany.selected = data;
        });
    }
    readCustomer(id: number) {
        {
            return this.http.post(this.adminUrl + 'readCustomer', {
                "id": id
            }).subscribe((data: Customer) => {
                this._SelectedCustomer.selected = data;
            });
        }
    }

    readAllCustomer() {
        return this.http.get(this.adminUrl + 'readAllCustomers').subscribe((data: CustomerList) => {
            this._Customers.customer = data.customer;
        });
    }
    readCompanies() {
        return this.http.get(this.adminUrl + 'readAllCompanies').subscribe((data: CompanyList) => {
            this._Companies.company = data.company;
        });
    }

    deleteCompany(id: number) {
        this.http.post(this.adminUrl + 'deleteCompany', {
            "id": id
        }).subscribe(() => {
            alert("company with the id "+id + " has been deleted!")
         });
    }

    deleteCustomer(id: number) {
        this.http.post(this.adminUrl + 'deleteCustomer', {
            "id": id
        }).subscribe(() => {
            alert("customer with the id "+id + " has been deleted!")
         });
    }


}