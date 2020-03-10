import {Coupon} from './coupon'
export class Customer {
    public id:number;
	public uid:String;
	public  firstName:String;
	public  lastName: String;
	public  email: String;
	public  password:String;
	public  coupons :[Coupon];
}
