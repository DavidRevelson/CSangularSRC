export interface Coupon {

    amount: string;
    endDate: Date;
    id: string;
    image: string;
    message: string;
    price: string;
    startDate: Date;
    title: string;
    type: string;
    
}

export interface CouponList {
    coupon: Coupon[];
}