import React from 'react';
import * as S from './App.style';
import { UsersView } from './views/users/UsersView';
import { ChangeLanguage } from './common/components/changeLanguage/ChangeLanguage';

function App() {
  return (
    <S.Container>
      <S.Header>
        <ChangeLanguage />
        <UsersView />
      </S.Header>
    </S.Container>
  );
}

export default App;
