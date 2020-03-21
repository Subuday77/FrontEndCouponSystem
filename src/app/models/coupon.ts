import {Category}from './category.enum'
export class Coupon {
    public id: number;
    public companyId: number;
    public uid: String;
    public title: String;
    public description: String;
    public startDate: Date;
    public endDate: Date;
    public amount: number;
    public price: number;
    public image: String;
    public  category: Category;

}
