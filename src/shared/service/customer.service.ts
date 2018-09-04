import { CouponList } from './../model/coupon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()
export class CustomerService {

    customerUrl = "http://localhost:8080/CS/rest/Customer/";

    _Coupons: CouponList = { coupon: [] };

    constructor(private http: HttpClient) { }


    PurchaseCoupon(id: number) {
        this.http.post(this.customerUrl + 'PurchesedCoupon', {
            "id": id
        }).subscribe(() => {
            alert("Thank you for purchasing coupon from our site!");
        }, (err) => {
            alert("You have already purchased this coupon or its date expired");
        });
    }


    readAllPurchasedCoupon() {
        this.http.get(this.customerUrl + 'readAllPurchesedCoupons').subscribe((data: CouponList) => {
            this._Coupons.coupon = data.coupon;
        });
    }


    readAllPurchasedCouponByType(type) {
        this.http.post(this.customerUrl + 'readAllPurchesedCouponsByType', {
            "type": type
        }).subscribe((data: CouponList) => {
            if(data == null){
                alert("No coupon found with this type:" + type);
            }else{

                this._Coupons.coupon = data.coupon;
            }
        });
    }


    readAllPurchasedCouponByPrice(price: number) {
        this.http.post(this.customerUrl + 'readAllPurchesedCouponsByPrice', {
            "price": price
        }).subscribe((data: CouponList) => {
            if (data == null) {
                alert("No coupons that contains price " + price);
                return;
            }
            this._Coupons.coupon = data.coupon;
        });
    }

    readAllCoupons() {
        this.http.get(this.customerUrl + 'readAllCoupons').subscribe((data: CouponList) => {
            this._Coupons.coupon = data.coupon;
        });
    }

}