import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CheckLogin from '~/Screens/CheckLogin';

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
  },
  {
    initialRouteName: 'CheckLogin',
  },
);

export default createAppContainer(AppNavigator);
