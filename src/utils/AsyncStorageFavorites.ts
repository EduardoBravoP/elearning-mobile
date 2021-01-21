/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IFavoriteProps {
  id: string;
  name: string;
  image: string;
}

export async function saveFavoriteInAsyncStorage(data: IFavoriteProps) {
  //ver se algum valor ja esta setado com a chave @elearning:favorites
  const value = await AsyncStorage.getItem('@elearning:favorites');

  if (value) {
    await AsyncStorage.removeItem('@elearning:favorites');

    const parsedValue: Array<IFavoriteProps> = JSON.parse(value);

    parsedValue.push(data);

    const stringValue = JSON.stringify(parsedValue);

    await AsyncStorage.setItem('@elearning:favorites', stringValue);

    return;
  }

  let parsedValue = JSON.stringify([data]);

  await AsyncStorage.setItem('@elearning:favorites', parsedValue);
}

export async function removeFavoriteInAsyncStorage(data: IFavoriteProps) {
  const value = await AsyncStorage.getItem('@elearning:favorites');

  if (value) {
    const parsedValue: IFavoriteProps[] = JSON.parse(value);

    const dataIndex = parsedValue.findIndex((item) => item.id === data.id);

    parsedValue.splice(dataIndex, 1);

    await AsyncStorage.setItem('@elearning:favorites', JSON.stringify(parsedValue));
  }
}
