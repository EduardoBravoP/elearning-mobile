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
  CompletedView,
  CompletedText,
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
}

const Lesson: React.FC<IProps> = ({id, course_id, lesson}: IProps) => {
  const navigation = useNavigation();

  const handleGoToLessonDetails = useCallback(() => {
    navigation.navigate('LessonDetails', {id, course_id});
  }, [navigation, id, course_id]);

  return (
    <Container>
      <ImageView>
        <Image source={courseImg} />
      </ImageView>
      <Button onPress={handleGoToLessonDetails}>
        <ButtonContainer>
          <Title>{lesson.name}</Title>
          <Description>
            <Text>Aula 02</Text>
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
          <CompletedView>
            <CompletedText>Completo!</CompletedText>
          </CompletedView>
        </ButtonContainer>
      </Button>
    </Container>
  );
};

export default Lesson;
