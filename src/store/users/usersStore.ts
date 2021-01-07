import { action, computed, thunk } from 'easy-peasy';
import { UsersStore } from '../../models/store/UsersStore';
import { usersService } from './usersService';
import { ResponseType } from '../../models/store/Response';

export const usersStore: UsersStore = {
  users: [],
  search: '',
  isFetching: false,

  filteredUsers: computed(
    [(state) => state.users, (state) => state.search.toLowerCase()],
    (users, searchPhrase) => {
      return searchPhrase.length > 0
        ? users.filter((user) => {
            const valuesToSearchIn = [user.id, user.name, user.username];

            return valuesToSearchIn.some((value) => {
              return value.toString().toLowerCase().includes(searchPhrase);
            });
          })
        : users;
    },
  ),

  setFetching: action((state, isFetching) => {
    state.isFetching = isFetching;
  }),
  setUsers: action((state, payload) => {
    state.users = payload;
  }),
  searchUsers: action((state, searchPhrase) => {
    state.search = searchPhrase;
  }),

  fetchUsers: thunk(async (actions, _, { injections }) => {
    actions.setFetching(true);

    const response = await usersService.readUsersList({
      apiService: injections.apiService,
    });

    if (response.code === ResponseType.OK) {
      actions.setUsers(response.data);
    }
    actions.setFetching(false);
  }),
};
