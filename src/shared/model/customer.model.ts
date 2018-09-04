export interface Customer {

    custName: string;
    id: string;
    password: string;

}

export interface CustomerList {
    customer: Customer[];
}