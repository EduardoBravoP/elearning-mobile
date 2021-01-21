import React, {useEffect, useState} from 'react';

import {Image} from 'react-native';

import {
  Container,
  Header,
  ContentHeader,
  Content,
  ScrollView,
  Title,
  HeaderText,
} from './styles';

import logoImg from '../../assets/Logotipo.png';
import Input from '../../components/Input';
import Course from '../../components/Course';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC = () => {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  useEffect(() => {
    async function getFavoriteCourses() {
      const stringFavoriteCourses = await AsyncStorage.getItem(
        '@elearning:favorites',
      );

      if (stringFavoriteCourses !== null) {
        setFavoriteCourses(JSON.parse(stringFavoriteCourses));
        console.log(favoriteCourses);
      }
    }

    getFavoriteCourses();
  }, [favoriteCourses]);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <Input />
      </Header>

      <Content>
        <ContentHeader>
          <Title>Cursos Salvos</Title>
        </ContentHeader>
        <ScrollView
          ListEmptyComponent={() => (
            <HeaderText>Não há cursos salvos no momento</HeaderText>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={favoriteCourses}
          renderItem={({item}) => (
            <Course
              id={item.id}
              name={item.name}
              imageUrl={item.image}
              hasDeleteIcon
            />
          )}
        />
        <Footer isActive={false} />
      </Content>
    </Container>
  );
};

export default Home;
