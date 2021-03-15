import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';

import {Image} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../api';

import {
  IFavoriteProps,
  removeFavoriteInAsyncStorage,
  saveFavoriteInAsyncStorage,
} from '../../utils/AsyncStorageFavorites';

import logoImg from '../../assets/Logotipo.png';
import Lesson from '../../components/Lesson';
import {
  Container,
  Header,
  Content,
  ContentHeader,
  Title,
  Description,
  ScrollView,
  EmptyDescription,
} from './styles';
import {useCourses} from '../../context/CourseContext';

interface IRouteParams {
  id: string;
}

interface ICourse {
  id: string;
  image: string;
  name: string;
}

const Lessons: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {setLessons, lessons} = useCourses();

  const routeParams = route.params as IRouteParams;

  const [course, setCourse] = useState<ICourse>({} as ICourse);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    api.get(`courses/${routeParams.id}/lessons`).then((response) => {
      if (response.data) {
        setLessons(response.data);
      } else {
        setLessons([]);
      }
    });

    api.get('courses').then((response) => {
      const courses: ICourse[] = response.data;

      const thisCourse = courses.filter(
        (item: ICourse) => item.id === routeParams.id,
      )[0];

      setCourse(thisCourse);
    });
  }, [routeParams.id, setLessons]);

  useEffect(() => {
    AsyncStorage.getItem('@elearning:favorites').then((courses) => {
      if (!courses) {
        setIsFavorite(false);
        return;
      }

      const parsedCourses: Array<IFavoriteProps> = JSON.parse(courses);

      const favoriteCourse = parsedCourses.filter(
        (item) => item.id === routeParams.id,
      )[0];

      if (!favoriteCourse) {
        setIsFavorite(false);
      } else {
        setIsFavorite(true);
      }
    });
  }, [routeParams.id]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      AsyncStorage.getItem('@elearning:favorites').then((courses) => {
        if (!courses) {
          setIsFavorite(false);
          return;
        }

        const parsedCourses: Array<IFavoriteProps> = JSON.parse(courses);

        const favoriteCourse = parsedCourses.filter(
          (item) => item.id === routeParams.id,
        )[0];

        if (!favoriteCourse) {
          setIsFavorite(false);
        } else {
          setIsFavorite(true);
        }
      });
    });

    return unsubscribe;
  }, [navigation, routeParams.id]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleFavorite = useCallback(() => {
    if (isFavorite) {
      removeFavoriteInAsyncStorage(course);
      setIsFavorite(false);
    } else {
      saveFavoriteInAsyncStorage(course);
      setIsFavorite(true);
    }
  }, [course, isFavorite]);

  return (
    <Container>
      <Header>
        <TouchableNativeFeedback onPress={handleGoBack}>
          <Icon size={24} color="#FF6680" name="arrow-left" />
        </TouchableNativeFeedback>
        <Image source={logoImg} />
        <TouchableNativeFeedback onPress={handleFavorite}>
          {isFavorite ? (
            <IonIcon size={27} color="#FF6680" name="ios-heart" />
          ) : (
            <IonIcon size={27} color="#FF6680" name="ios-heart-outline" />
          )}
        </TouchableNativeFeedback>
      </Header>

      {lessons && (
        <Content>
          <ContentHeader>
            <Title>{course.name}</Title>
            <Description>{lessons.length} aulas</Description>
          </ContentHeader>
          <ScrollView
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <EmptyDescription>Não há aulas no momento</EmptyDescription>
            )}
            keyExtractor={(item) => item.id}
            data={lessons}
            renderItem={({item, index}) => (
              <Lesson
                course_id={routeParams.id}
                id={item.id}
                lesson={item}
                index={index}
              />
            )}
          />
        </Content>
      )}
    </Container>
  );
};

export default Lessons;
