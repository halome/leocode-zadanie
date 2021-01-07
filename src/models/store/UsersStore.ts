import {Action, Computed, Thunk} from 'easy-peasy';
import { UserModel } from '../user/UserModel';
import { Injections } from './Injections';

export interface UsersStore {
  users: UserModel[];
  search: string;
  isFetching: boolean;
  
  filteredUsers: Computed<UsersStore, UserModel[]>;
  
  setUsers: Action<UsersStore, UserModel[]>;
  searchUsers: Action<UsersStore, string>;
  setFetching: Action<UsersStore, boolean>;
  
  fetchUsers: Thunk<UsersStore, undefined, Injections>;
}
