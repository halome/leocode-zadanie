import React, { useEffect } from 'react';
import * as S from './style/UsersView.style';
import { SearchInput } from '../../common/components/searchInput/SearchInput';
import { User } from '../../common/components/user/User';
import { useStoreActions, useStoreState } from '../../store/store';
import { useIntl } from 'react-intl';
import messages from './UsersView.message';

interface Props {}

export const UsersView: React.FC<Props> = () => {
  const { formatMessage } = useIntl();
  const { searchUsers, fetchUsers } = useStoreActions(
    (actions) => actions.usersState,
  );
  const { isFetching, filteredUsers } = useStoreState(
    (state) => state.usersState,
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <S.Container>
      <S.Title>{formatMessage(messages.header)}</S.Title>
      <SearchInput disabled={isFetching} onValueChange={searchUsers} />
      <S.ListContainer>
        {isFetching ? (
          <S.PuffLoader />
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
