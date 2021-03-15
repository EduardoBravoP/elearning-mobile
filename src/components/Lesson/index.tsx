import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import courseImg from '../../assets/Cursos.png';

import {
  Container,
  ImageView,
  Button,
  ButtonContainer,
  Title,
  Text,
  Description,
  DurationView,
  ArrowIconContainer,
} from './styles';

interface ILessonProps {
  name: string;
  duration: number;
  description: string;
}

interface IProps {
  id: string;
  course_id: string;
  lesson: ILessonProps;
  index: number;
}

const Lesson: React.FC<IProps> = ({id, course_id, lesson, index}: IProps) => {
  const navigation = useNavigation();

  const handleGoToLessonDetails = useCallback(() => {
    navigation.navigate('LessonDetails', {
      id,
      course_id,
      lessonNumber: index + 1,
    });
  }, [navigation, id, course_id, index]);

  return (
    <Container>
      <ImageView>
        <Image source={courseImg} />
      </ImageView>
      <Button onPress={handleGoToLessonDetails}>
        <ButtonContainer>
          <Title>{lesson.name}</Title>
          <Description>
            <Text>Aula {index + 1}</Text>
            <DurationView>
              <Icon
                name="clock"
                size={12}
                color="#C4C4D1"
                style={{marginRight: 5}}
              />
              <Text>{Math.floor(lesson.duration / 60)} min</Text>
            </DurationView>
          </Description>
          <ArrowIconContainer>
            <Icon name="arrow-right" size={15} color="#fff" />
          </ArrowIconContainer>
        </ButtonContainer>
      </Button>
    </Container>
  );
};

export default Lesson;
