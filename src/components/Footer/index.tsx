import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ActiveBar,
  ButtonContainer,
  Button,
  TextButton,
} from './styles';

interface IProps {
  isActive: boolean;
}

const Footer: React.FC<IProps> = ({isActive}: IProps) => {
  const navigation = useNavigation();

  const handleChangeFocus = useCallback(() => {
    if (isActive) {
      navigation.navigate('Saved');
    } else {
      navigation.navigate('Home');
    }
  }, [navigation, isActive]);

  return (
    <Container>
      {isActive ? (
        <>
          <ActiveBar />
          <ButtonContainer>
            <Icon name="home" size={15} color="#FF6680" />

            <Button>
              <TextButton isFocused>Home</TextButton>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Icon name="heart" size={15} color="#C4C4D1" />

            <Button onPress={handleChangeFocus}>
              <TextButton>Salvos</TextButton>
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <ActiveBar onTheRight={true} />
          <ButtonContainer>
            <Icon name="home" size={15} color="#C4C4D1" />

            <Button onPress={handleChangeFocus}>
              <TextButton>Home</TextButton>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Icon name="heart" size={15} color="#FF6680" />

            <Button>
              <TextButton isFocused>Salvos</TextButton>
            </Button>
          </ButtonContainer>
        </>
      )}
    </Container>
  );
};

export default Footer;
