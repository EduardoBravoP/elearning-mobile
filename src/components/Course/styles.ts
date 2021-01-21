import styled from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 16px;
  width: 156px;
  height: 172px;
  padding: 10px 10px 25px 25px;
  display: flex;
  margin-bottom: 18px;
  margin-right: 16px;

  justify-content: space-between;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TextArea = styled.View``;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #6c6c80;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 10px;
  color: #c4c4d1;
`;

export const Button = styled(TouchableNativeFeedback)`
  height: 24px;
  width: 25px;
`;

export const CourseButton = styled.TouchableOpacity`
  width: 156px;
  height: 172px;
  border-radius: 15px;

  margin-bottom: 18px;
  margin-right: 16px;
`;

export const Icon = styled(FeatherIcon)``;

export const ModalView = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalCenterView = styled.View`
  width: 270px;
  height: 242px;
  background: #fff;
  border-radius: 20px;
  padding: 35px 30px 35px 40px;

  justify-content: space-between;
  align-items: center;
`;

export const ModalIcon = styled(FeatherIcon)``;

export const ModalDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #6c6c80;
  text-align: center;
  line-height: 25px;
  padding: 0 25px;
`;

export const ModalButtonArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ModalNoButton = styled.TouchableOpacity`
  width: 32px;
  height: 18px;
  justify-content: center;
  margin-right: 20px;
`;

export const ModalYesButton = styled.TouchableOpacity`
  width: 133px;
  height: 40px;
  background-color: #ff6680;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const NoButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #ff6680;
`;

export const YesButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #fff;
`;
