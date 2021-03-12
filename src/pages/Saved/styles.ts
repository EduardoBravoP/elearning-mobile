import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 107%;
  background-color: #6548a3;
`;

export const Header = styled.View`
  padding: 0 24px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.View`
  background-color: #f0edf5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  height: 100%;
`;

export const ContentHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const ScrollView = styled(FlatList as new () => FlatList)`
  flex: 1;
  margin-bottom: 220px;
  padding-left: 33px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 20px;
  color: #3d3d4c;
  margin: 24px 0;
`;

export const HeaderText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #a0a0b2;
  margin: 24px 0;
`;
