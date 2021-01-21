import React from 'react';

import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import logoImg from '../../assets/Logo.png';

import {Container, Title, Description, Button, TextButton} from './styles';

const OnBoarding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image style={{marginTop: 80, marginLeft: 4}} source={logoImg} />
      <Title>Aprenda da melhor forma</Title>
      <Description>
        Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
      </Description>
      <Button onPress={() => navigation.navigate('MainBottom')}>
        <TextButton>Começar os estudos</TextButton>
      </Button>
    </Container>
  );
};

export default OnBoarding;
