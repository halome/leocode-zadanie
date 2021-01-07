import React, { PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';
import { useStoreState } from '../../store/store';
import { DEFAULT_LANG } from '../../store/i18n/i18nStore';
import { langToMessagesMap } from '../i18n/langToMessagesMap';

export const I18NProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const currentLanguage = useStoreState(
    (state) => state.i18nState.currentLanguage,
  );

  return (
    <IntlProvider
      defaultLocale={DEFAULT_LANG}
      locale={currentLanguage}
      messages={langToMessagesMap[currentLanguage]}
    >
      {children}
    </IntlProvider>
  );
};
