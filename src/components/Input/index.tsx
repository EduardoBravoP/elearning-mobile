import React from 'react';

import {Container, TextInput, Icon} from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <Icon name="search" size={20} color="#C4C4D1" />

      <TextInput placeholder="Busque um curso" placeholderTextColor="#c4c4d1" />
    </Container>
  );
};

export default Input;
