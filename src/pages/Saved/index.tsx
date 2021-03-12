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
import Course from '../../components/Course';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

interface ICourse {
  id: string;
  image: string;
  name: string;
}

const Saved: React.FC = () => {
  const [favoriteCourses, setFavoriteCourses] = useState<ICourse[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function getFavoriteCourses() {
        const stringFavoriteCourses = await AsyncStorage.getItem(
          '@elearning:favorites',
        );

        if (stringFavoriteCourses !== null) {
          const parsedFavoriteCourses: ICourse[] = JSON.parse(
            stringFavoriteCourses,
          );

          setFavoriteCourses(parsedFavoriteCourses);
        }
      }
      getFavoriteCourses();
    });

    return unsubscribe;
  }, [navigation, favoriteCourses]);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
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

export default Saved;
