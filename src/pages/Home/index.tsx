import React from 'react';

import {Image, ScrollView, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Header,
  SearchTextInput,
  Content,
  Title,
  HeaderText,
} from './styles';

import logoImg from '../../assets/Logotipo.png';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <SearchTextInput placeholder="Busque um curso" />
        <Icon name="fa-search" />
      </Header>

      <Content>
        <Title>Categorias</Title>
        <HeaderText>43 Cursos</HeaderText>
        <ScrollView>
          <Text style={{fontSize: 40}}>Cursos COMPONENTE</Text>
        </ScrollView>
        <Text>Home Salvos</Text>
      </Content>
    </Container>
  );
};

export default Home;
