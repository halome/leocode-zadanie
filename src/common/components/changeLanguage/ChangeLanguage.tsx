import React from 'react';
import * as S from './style/ChangeLanguage.style';
import { useStoreActions, useStoreState } from '../../../store/store';
import { Lang } from '../../i18n/models/Lang';
import { useIntl } from 'react-intl';
import messages from './ChangeLanguage.message';

export const ChangeLanguage = () => {
  const { formatMessage } = useIntl();
  const { currentLanguage } = useStoreState((state) => state.i18nState);
  const { changeLanguage } = useStoreActions((actions) => actions.i18nState);

  const onLangButtonClick = (newLang: Lang) => {
    changeLanguage(newLang);
  };

  return (
    <S.Container>
      <S.Button
        isSelected={currentLanguage === Lang.PL}
        onClick={() => onLangButtonClick(Lang.PL)}
      >
        {formatMessage(messages.pl)}
      </S.Button>
      <S.VerticalLine />
      <S.Button
        isSelected={currentLanguage === Lang.EN}
        onClick={() => onLangButtonClick(Lang.EN)}
      >
        {formatMessage(messages.en)}
      </S.Button>
    </S.Container>
  );
};
