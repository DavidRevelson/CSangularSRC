import { Coupon, CouponList } from './../model/coupon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class CompanyService {

    _SelectedCoupon: { selected: Coupon } = { selected: undefined }
    _Coupons: CouponList = { coupon: [] };

    companyUrl = "http://localhost:8080/CS/rest/Company/";


    constructor(private http: HttpClient) {
    }

    createCoupon(amount, endDate, image, message, price, startDate, title, type) {
        this.http.post(this.companyUrl + 'createCoupon', {
            "amount": amount,
            "endDate": endDate,
            "image": image,
            "message": message,
            "price": price,
            "startDate": startDate,
            "title": title,
            "type": type
        }).subscribe(() => {
            alert("Coupon successfuly created!")
        }, () => {
            alert("Coupon you're trying to create already exist with this title:" + title);
        });
    }

    deleteCoupon(id) {
        this.http.post(this.companyUrl + 'deleteCoupon', {
            "id": id
        }).subscribe(() => { });
    }

    updateCoupon(id, endDate, price) {
        this.http.put(this.companyUrl + 'updateCoupon', {
            "id": id,
            "endDate": endDate,
            "price": price
        }).subscribe(() => { });
    }

    readCoupon(id) {
        this.http.post(this.companyUrl + 'readCoupon', {
            "id": id
        }).subscribe((data: Coupon) => {
            this._SelectedCoupon.selected = data;
        });
    }

    readAllCoupon() {
        this.http.get(this.companyUrl + 'readAllCoupon').subscribe((data: CouponList) => {
            this._Coupons.coupon = data.coupon;
        });
    }
    readCouponByType(type) {
        this.http.post(this.companyUrl + 'readCouponByType', {
            "type": type
        }).subscribe((data: CouponList) => {
            if (data == null) {
                alert("No coupon found with this type:" + type);
            } else {
                this._Coupons.coupon = data.coupon;
            }
        });
    }
    readCouponByPrice(price) {
        this.http.post(this.companyUrl + 'readCouponByPrice', {
            "price": price
        }).subscribe((data: CouponList) => {
            if (data == null) {
                alert("No coupons that contains price " + price);
                return;
            }
            this._Coupons.coupon = data.coupon;
        });
    }


}
