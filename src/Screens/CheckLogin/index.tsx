import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #feffff;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const CheckLogin = ({navigation}: Props) => {
  AsyncStorage.getItem('key')
    .then(value => {
      if (value) {
        navigation.navigate('MainNavigator');
      } else {
        navigation.navigate('LoginNavigator');
      }
    })
    .catch((error: Error) => {
      console.log(error);
    });

  return (
    <Container>
      <ActivityIndicator size="large" color="#000" />
    </Container>
  );
};

CheckLogin.navigationOptions = {
  header: null,
};

export default CheckLogin;
