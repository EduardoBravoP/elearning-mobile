import styled, {css} from 'styled-components/native';

import {Dimensions} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

interface IProps {
  isFocused?: boolean;
  onTheRight?: boolean;
}

export const Container = styled.View`
  position: absolute;
  bottom: ${125 + getStatusBarHeight()}px;
  height: 73px;
  width: 100%;
  background-color: #fff;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const ActiveBar = styled.View<IProps>`
  position: absolute;
  ${(props) =>
    props.onTheRight &&
    css`
      right: 0;
    `}
  bottom: ${48 + getStatusBarHeight()}px;
  width: ${Dimensions.get('window').width / 2}px;
  height: 2px;
  background-color: #ff6680;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
  flex: 1;
  padding: 0 68px;
`;

export const Button = styled.TouchableWithoutFeedback`
  height: 100%;
`;

export const TextButton = styled.Text<IProps>`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  color: ${(props) => (props.isFocused ? '#FF6680' : '#C4C4D1')};
  margin-left: 12px;
`;
