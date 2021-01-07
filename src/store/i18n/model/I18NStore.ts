import { Action, Computed } from 'easy-peasy';
import { Lang } from '../../../common/i18n/models/Lang';
import { LocaleCode } from '../../../common/i18n/models/LocaleCode';

export interface I18NStore {
  currentLanguage: Lang;
  currentLocale: Computed<I18NStore, LocaleCode>;
  changeLanguage: Action<I18NStore, Lang>;
}
