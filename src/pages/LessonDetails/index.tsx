import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';

import {Image} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Header,
  Content,
  VideoStyles,
  TextArea,
  Title,
  TextWrapper,
  Duration,
  DurationView,
  Description,
  ButtonArea,
  Button,
  ButtonContainer,
  ButtonDescription,
} from './styles';

import logoImg from '../../assets/Logotipo.png';
import {
  IFavoriteProps,
  removeFavoriteInAsyncStorage,
  saveFavoriteInAsyncStorage,
} from '../../utils/AsyncStorageFavorites';
import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IRouteParams {
  id: string;
  course_id: string;
}

interface ILesson {
  id: string;
  name: string;
  description: string;
  duration: number;
  video_id: string;
}

const LessonDetails: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const routeParams = route.params as IRouteParams;

  const [isFavorite, setIsFavorite] = useState(false);
  const [course, setCourse] = useState<IFavoriteProps>({} as IFavoriteProps);
  const [thisLesson, setThisLesson] = useState<ILesson>({} as ILesson);

  useEffect(() => {
    api.get('courses').then((response) => {
      const courses: IFavoriteProps[] = response.data;

      const thisCourse = courses.filter(
        (item: IFavoriteProps) => item.id === routeParams.course_id,
      )[0];

      setCourse(thisCourse);
    });

    api.get(`courses/${routeParams.course_id}/lessons`).then((response) => {
      const lessons: ILesson[] = response.data;

      const lesson = lessons.filter((item) => item.id === routeParams.id)[0];
      setThisLesson(lesson);
    });
  }, [routeParams.course_id, routeParams.id]);

  useEffect(() => {
    AsyncStorage.getItem('@elearning:favorites').then((courses) => {
      if (!courses) {
        setIsFavorite(false);
        return;
      }

      const parsedCourses: Array<IFavoriteProps> = JSON.parse(courses);

      const favoriteCourse = parsedCourses.filter(
        (item) => item.id === routeParams.course_id,
      )[0];

      if (!favoriteCourse) {
        setIsFavorite(false);
      } else {
        setIsFavorite(true);
      }
    });
  }, [routeParams.course_id]);

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

      <Content>
        <VideoStyles
          apiKey="AIzaSyCUlsCzQa51PnJXWY0T74R4gaq4zAmtgUY"
          videoId={thisLesson.video_id}
        />
        <TextArea>
          <Title>{thisLesson.name}</Title>
          <TextWrapper>
            <Duration>Aula 01</Duration>
            <DurationView>
              <Icon
                size={16}
                style={{marginRight: 5}}
                name="clock"
                color="#a0a0b2"
              />
              <Duration>{Math.floor(thisLesson.duration / 60)} min</Duration>
            </DurationView>
          </TextWrapper>
          <Description>{thisLesson.description}</Description>
        </TextArea>
        <ButtonArea>
          <Button white>
            <ButtonContainer>
              <Icon name="arrow-left" color="#FF6680" size={20} />
              <ButtonDescription style={{color: '#FF6680', marginLeft: 12}}>
                Aula anterior
              </ButtonDescription>
            </ButtonContainer>
          </Button>
          <Button>
            <ButtonContainer>
              <ButtonDescription style={{color: '#fff', marginRight: 12}}>
                Próxima aula
              </ButtonDescription>
              <Icon name="arrow-right" color="#fff" size={20} />
            </ButtonContainer>
          </Button>
        </ButtonArea>
      </Content>
    </Container>
  );
};

export default LessonDetails;
