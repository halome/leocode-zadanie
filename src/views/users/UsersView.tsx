import React, { useEffect } from 'react';
import * as S from './style/UsersView.style';
import { SearchInput } from '../../components/searchInput/SearchInput';
import { User } from '../../components/user/User';
import { useStoreActions, useStoreState } from '../../store/store';
// @ts-ignore
import Loader from 'react-loader-spinner';

interface Props {}

export const UsersView: React.FC<Props> = () => {
  const { searchUsers, fetchUsers } = useStoreActions((actions) => actions.usersState);
  const { isFetching, filteredUsers } = useStoreState((state) => state.usersState);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  return (
    <S.Container>
      <S.Title>Users list</S.Title>
      <SearchInput disabled={isFetching} onValueChange={searchUsers}/>
      <S.ListContainer>
        {isFetching ? (
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
        ) : (
          filteredUsers.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              nickname={user.username}
            />
          ))
        )}
      </S.ListContainer>
    </S.Container>
  );
};
