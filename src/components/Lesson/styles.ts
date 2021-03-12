import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  align-self: flex-end;
`;

export const ImageView = styled.View`
  position: absolute;
  z-index: 100;
  left: -34px;
  top: 40px;
  width: 68px;
  height: 68px;
  background-color: #61c5bd;
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 290px;
  height: 100px;
  background-color: #fff;
  padding: 16px 16px 16px 56px;
  border-radius: 16px;
  margin-top: 24px;
`;

export const ButtonContainer = styled.View`
  height: 100%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  line-height: 20px;
  color: #6c6c80;
  margin-right: 90px;
`;

export const Description = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 10px;
  color: #c4c4d1;
`;

export const DurationView = styled.View`
  flex-direction: row;
`;

export const ArrowIconContainer = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #61c5bd;
  border-radius: 15px;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
