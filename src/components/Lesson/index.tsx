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

interface IProps {
  id: string;
}

const Lesson: React.FC<IProps> = ({id}: IProps) => {
  const navigation = useNavigation();

  const handleGoToLessonDetails = useCallback(() => {
    navigation.navigate('LessonDetails', {id});
  }, [navigation, id]);

  return (
    <Container>
      <ImageView>
        <Image source={courseImg} />
      </ImageView>
      <Button onPress={handleGoToLessonDetails}>
        <ButtonContainer>
          <Title>Introdução à teoria matemática</Title>
          <Description>
            <Text>Aula 02</Text>
            <DurationView>
              <Icon
                name="clock"
                size={12}
                color="#C4C4D1"
                style={{marginRight: 5}}
              />
              <Text>5min</Text>
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
