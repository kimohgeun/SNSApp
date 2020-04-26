import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

const LoginNavigator = createStackNavigator({
  Login,
  PasswordReset,
  Signup,
});

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
  },
  {
    initialRouteName: 'CheckLogin',
  },
);

export default createAppContainer(AppNavigator);
