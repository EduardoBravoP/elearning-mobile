import React from 'react';

import {Container, TextInput, Icon} from './styles';

interface InputProps {
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({value = '', onChangeText}) => {
  return (
    <Container>
      <Icon name="search" size={20} color="#C4C4D1" />

      <TextInput
        value={value}
        placeholder="Busque um curso"
        placeholderTextColor="#c4c4d1"
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
