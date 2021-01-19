import React from 'react';

import {Image} from 'react-native';
import styled from 'styled-components';

import logoImg from '../../assets/Logo.png';

import {Container, Title, Description, Button, TextButton} from './styles';

const OnBoarding: React.FC = () => {
  return (
    <Container>
      <Image style={{marginTop: 80, marginLeft: 4}} source={logoImg} />
      <Title>Aprenda da melhor forma</Title>
      <Description>
        Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
      </Description>
      <Button>
        <TextButton>Começar os estudos</TextButton>
      </Button>
    </Container>
  );
};

export default OnBoarding;
