import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';

import {Image, Modal} from 'react-native';
import api from '../../api';
import {removeFavoriteInAsyncStorage} from '../../utils/AsyncStorageFavorites';

import {
  Container,
  ContentWrapper,
  TextArea,
  Title,
  Text,
  Button,
  Icon,
  CourseButton,
  ModalView,
  ModalCenterView,
  ModalIcon,
  ModalDescription,
  ModalButtonArea,
  ModalNoButton,
  ModalYesButton,
  NoButtonText,
  YesButtonText,
} from './styles';

interface IProps {
  id: string;
  hasDeleteIcon?: boolean;
  imageUrl: string;
  name: string;
}

const Course: React.FC<IProps> = ({
  hasDeleteIcon = false,
  imageUrl,
  name,
  id,
}: IProps) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [lessonsInCourse, setLessonsInCourse] = useState([]);

  useEffect(() => {
    api.get(`courses/${id}/lessons`).then((response) => {
      setLessonsInCourse(response.data);
    });
  }, [id]);

  const handleNoSubmit = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleYesSubmit = useCallback(async () => {
    await removeFavoriteInAsyncStorage({id, image: imageUrl, name});
    setModalVisible(false);
    navigation.navigate('Home');
    navigation.navigate('Saved');
  }, [id, imageUrl, name, navigation]);

  return (
    <>
      <Modal animationType="fade" visible={modalVisible} transparent>
        <ModalView>
          <ModalCenterView>
            <ModalIcon size={48} color="#FF6680" name="trash" />
            <ModalDescription>
              Quer excluir suas aulas de {name}?
            </ModalDescription>
            <ModalButtonArea>
              <ModalNoButton onPress={handleNoSubmit}>
                <NoButtonText>Não!</NoButtonText>
              </ModalNoButton>
              <ModalYesButton onPress={handleYesSubmit}>
                <YesButtonText>Com Certeza</YesButtonText>
              </ModalYesButton>
            </ModalButtonArea>
          </ModalCenterView>
        </ModalView>
      </Modal>

      <CourseButton
        onPress={() => {
          navigation.navigate('CourseLessons', {id});
        }}>
        <Container>
          <ContentWrapper>
            <Image
              style={{
                width: 64,
                height: 64,
                marginTop: 15,
              }}
              source={{
                uri: imageUrl,
              }}
            />
            {hasDeleteIcon && (
              <Button>
                <Icon
                  name="trash"
                  size={24}
                  color="#C4C4D1"
                  onPress={() => {
                    setModalVisible(true);
                  }}
                />
              </Button>
            )}
          </ContentWrapper>
          <TextArea>
            <Title>{name}</Title>
            <Text>{lessonsInCourse.length} Aulas</Text>
          </TextArea>
        </Container>
      </CourseButton>
    </>
  );
};

export default Course;
