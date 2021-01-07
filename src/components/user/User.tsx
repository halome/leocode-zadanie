import React from 'react';
import * as S from './style/User.style';

interface Props {
  id: number;
  name: string;
  nickname: string;
}

export const User: React.FC<Props> = ({ id, name, nickname }) => {
  return (
    <S.Container>
      <S.User>
        <S.Id>{id}.</S.Id>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Nickname>@{nickname}</S.Nickname>
    </S.Container>
  );
};
