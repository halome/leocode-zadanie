import {LatLng} from "../latLng/LatLng";

export interface UserAddressModel {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: LatLng;
}
