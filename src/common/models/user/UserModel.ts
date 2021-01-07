import {UserAddressModel} from "./UserAddressModel";
import {UserCompanyModel} from "./UserCompanyModel";

export interface UserModel {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAddressModel;
	phone: string;
	website: string;
	company: UserCompanyModel;
}
