import { parseArray } from 'sparkson';
// import { UsersResponseModel } from './UsersResponseModel';
import { UsersService } from './model/UsersService';
import { UserModel } from '../../common/models/user/UserModel';
import { ResponseType } from '../../common/models/store/Response';

export const usersService: UsersService = {
  readUsersList: async ({ apiService }) => {
    try {
      const response = await apiService.get<UserModel[]>('/users');

      const data: UserModel[] = response.data;

      if (response.data && response.status === 200) {
        return {
          code: ResponseType.OK,
          data: data,
        };
      }
      return {
        code: ResponseType.UNKNOWN,
        data: [],
      };
    } catch (err) {
      console.log(err);
      return {
        code: ResponseType.ERROR,
        data: [],
      };
    }
  },
};
