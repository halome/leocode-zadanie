import React from 'react';
import * as S from './App.style';
import { UsersView } from './views/users/UsersView';

function App() {
  return (
    <S.Container>
      <S.Header>
        <UsersView />
      </S.Header>
    </S.Container>
  );
}

export default App;
