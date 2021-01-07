import { ApiService } from '../../Api';
import { RequestResponse } from '../../../common/models/store/Response';
import { UserModel } from '../../../common/models/user/UserModel';

export interface UsersService {
  readUsersList: (data: {
    apiService: ApiService;
  }) => Promise<RequestResponse<UserModel[]>>;
}
