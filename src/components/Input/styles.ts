import styled from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 56px;
  border-radius: 100px;
  margin-bottom: 32px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #6c6c80;
`;

export const Icon = styled(FeatherIcon)`
  margin-left: 24px;
  margin-right: 16px;
`;
