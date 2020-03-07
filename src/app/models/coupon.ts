import {Category}from './category.enum'
export class Coupon {
    private id: number;
    private companyId: number;
    private uid: String;
    private title: String;
    private description: String;
    private startDate: Date;
    private endDate: Date;
    private amount: number;
    private price: number;
    private image: String;
    private  category: Category;

}
