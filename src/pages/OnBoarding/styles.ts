import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  height: 100%;
  background-color: #6548a3;
  display: flex;

  align-items: flex-start;
  justify-content: space-between;
  padding: 36px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 36px;
  line-height: 42px;
  color: #ff6680;
  margin-right: 74px;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  color: #edebf5;
  font-size: 15px;
  line-height: 25px;
  margin-right: 74px;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #ff6680;
  width: 100%;
  border-radius: 100px;
  height: 56px;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #fff;
`;
