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
          <Button>
            <ButtonContainer>
              <Icon name="home" size={15} color="#FF6680" />

              <TextButton isFocused>Home</TextButton>
            </ButtonContainer>
          </Button>

          <Button onPress={handleChangeFocus}>
            <ButtonContainer>
              <Icon name="heart" size={15} color="#C4C4D1" />

              <TextButton>Salvos</TextButton>
            </ButtonContainer>
          </Button>
        </>
      ) : (
        <>
          <ActiveBar onTheRight={true} />
          <Button onPress={handleChangeFocus}>
            <ButtonContainer>
              <Icon name="home" size={15} color="#C4C4D1" />

              <TextButton>Home</TextButton>
            </ButtonContainer>
          </Button>

          <Button>
            <ButtonContainer>
              <Icon name="heart" size={15} color="#FF6680" />

              <TextButton isFocused>Salvos</TextButton>
            </ButtonContainer>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Footer;
