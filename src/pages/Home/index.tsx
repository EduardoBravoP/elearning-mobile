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
import api from '../../api';

const Home: React.FC = () => {
  const [courses, setCourses] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function loadCategories() {
      if (!inputValue) {
        api.get('courses').then((response) => setCourses(response.data));
        return;
      }

      const response = await api.get('courses', {
        params: {search: inputValue},
      });

      setCourses(response.data);
    }

    loadCategories();
  }, [inputValue]);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <Input value={inputValue} onChangeText={setInputValue} />
      </Header>

      <Content>
        <ContentHeader>
          <Title>Categorias</Title>
          <HeaderText>{courses ? courses.length : '0'} cursos</HeaderText>
        </ContentHeader>
        <ScrollView
          ListEmptyComponent={() => (
            <HeaderText>Não há cursos no momento</HeaderText>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={courses}
          renderItem={({item}) => (
            <Course id={item.id} name={item.name} imageUrl={item.image} />
          )}
        />
        <Footer isActive />
      </Content>
    </Container>
  );
};

export default Home;
