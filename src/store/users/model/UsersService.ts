// import { UsersResponseModel } from '../UsersResponseModel';
import { ApiService } from '../../Api';
import { RequestResponse } from '../../../models/store/Response';
import { UserModel } from '../../../models/user/UserModel';

export interface UsersService {
  readUsersList: (data: {
    apiService: ApiService;
  }) => Promise<RequestResponse<UserModel[]>>;
}
