import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: #6548a3;
  padding: 0 24px;
`;

export const Header = styled.View`
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const SearchTextInput = styled(TextInput)`
  height: 56px;
  width: 100%;
  border-radius: 100px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  background-color: #f0edf5;
`;

export const Title = styled.Text``;

export const HeaderText = styled.Text``;
