import { UsersStore } from '../../../store/users/model/UsersStore';
import { I18NStore } from '../../../store/i18n/model/I18NStore';

export interface StoreModel {
  usersState: UsersStore;
  i18nState: I18NStore;
}
