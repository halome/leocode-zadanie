import { action, computed } from 'easy-peasy';
import { I18NStore } from './model/I18NStore';
import { Lang } from '../../common/i18n/models/Lang';
import { LocaleCode } from '../../common/i18n/models/LocaleCode';

export const DEFAULT_LANG: Lang = Lang.EN;

const langToLocaleDict = {
  [Lang.PL]: LocaleCode.PL_PL,
  [Lang.EN]: LocaleCode.EN_US,
};

export const i18nStore: I18NStore = {
  currentLanguage: DEFAULT_LANG,
  currentLocale: computed((state) => langToLocaleDict[state.currentLanguage]),
  changeLanguage: action((state, lang) => {
    state.currentLanguage = lang;
  }),
};
