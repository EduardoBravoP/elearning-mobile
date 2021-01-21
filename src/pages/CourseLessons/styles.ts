import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  padding: 0 24px;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  padding: 0 24px 0 61px;
  background-color: #f0edf5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  height: 100%;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-left: -30px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 30px;
  color: #3d3d4c;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #a0a0b2;
  margin-bottom: 10px;
`;

export const ScrollView = styled(FlatList as new () => FlatList)`
  flex: 1;
  width: 330px;
  margin-left: -30px;
  margin-bottom: 150px;
`;

export const HeaderText = styled.Text``;

export const EmptyDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #a0a0b2;
  margin: 24px 0;
`;
