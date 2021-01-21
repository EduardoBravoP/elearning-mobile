import {useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';

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
} from './styles';

import logoImg from '../../assets/Logotipo.png';

interface IRouteParams {
  id: string;
}

const LessonDetails: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as IRouteParams;

  const [isFavorite, setIsFavorite] = useState(true);

  const handleGoBack = useCallback(() => {}, []);

  const handleFavorite = useCallback(() => {}, []);

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
          videoId="hS5Fm96UOhA"
        />
        <TextArea>
          <Title>Introdução à matemática</Title>
          <TextWrapper>
            <Duration>Aula 01</Duration>
            <DurationView>
              <Icon
                size={16}
                style={{marginRight: 5}}
                name="clock"
                color="#a0a0b2"
              />
              <Duration>5 min</Duration>
            </DurationView>
          </TextWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
            condimentum gravida. Aenean condimentum vehicula sapien, eleifend
            metus congue vel.
          </Description>
        </TextArea>
        <ButtonArea>
          <Button white>
            <ButtonContainer>
              <Icon name="arrow-left" color="#FF6680" size={20} />
              <Description style={{color: '#FF6680', marginLeft: 12}}>
                Aula anterior
              </Description>
            </ButtonContainer>
          </Button>
          <Button>
            <ButtonContainer>
              <Description style={{color: '#fff', marginRight: 12}}>
                Próxima aula
              </Description>
              <Icon name="arrow-right" color="#fff" size={20} />
            </ButtonContainer>
          </Button>
        </ButtonArea>
      </Content>
    </Container>
  );
};

export default LessonDetails;
