import styled from 'styled-components';
// @ts-ignore
import Loader from 'react-loader-spinner';

export const Container = styled.div`
  padding: 50px;
  width: 100%;
  max-width: 350px;
`;

export const Title = styled.div`
  padding-bottom: 10px;
`;

export const ListContainer = styled.div`
  padding-top: 20px;
`;

export const PuffLoader = styled(Loader).attrs({
  type: 'Puff',
  width: 100,
  height: 100,
  color: '#00bfff',
})``;
