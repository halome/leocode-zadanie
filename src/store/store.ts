import { createStore, createTypedHooks } from 'easy-peasy';
import { StoreModel } from '../common/models/store/StoreModel';
import { usersStore } from './users/usersStore';
import { ApiService } from './Api';

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export const store = createStore<StoreModel>(
  {
    usersState: usersStore,
  },
  {
    injections: {
      apiService: new ApiService('https://jsonplaceholder.typicode.com/'),
    },
  },
);
