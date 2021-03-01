import styled, {css} from 'styled-components/native';

import Youtube from 'react-native-youtube';

interface IButtonProps {
  white?: boolean;
}

export const Container = styled.View``;

export const Header = styled.View`
  padding: 0 24px;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  background: #f0edf5;
  height: 100%;
`;

export const VideoStyles = styled(Youtube)`
  width: 100%;
  height: 210px;
`;

export const TextArea = styled.View`
  justify-content: space-between;
  padding: 0 25px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 30px;
  line-height: 35px;
  color: #3d3d4c;
  margin: 24px 50px 17px 0;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
  width: 30%;
  justify-content: space-between;
`;

export const Duration = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #a0a0b2;
`;

export const DurationView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #6c6c80;
  height: 150px;
`;

export const ButtonArea = styled.View`
  height: 20%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity<IButtonProps>`
  width: 163px;
  height: 56px;

  border-radius: 40px;

  background-color: ${(props) => (props.white ? '#F0EDF5' : '#FF6680')};
  ${(props) =>
    props.white &&
    css`
      margin-right: 15px;
    `}
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #6c6c80;
`;
