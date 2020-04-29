import React from 'react';
import {Image} from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import Drawer from '~/Screens/Drawer';

const LoginNavigator = createStackNavigator({
  Login,
  PasswordReset,
  Signup,
});

const MyFeedTab = createStackNavigator({
  MyFeed,
});

const FeedsTab = createStackNavigator({
  Feeds,
});

const UploadTab = createStackNavigator({
  Upload,
});

const ProfileTab = createStackNavigator({
  Profile,
});

const MainTabs = createBottomTabNavigator({
  MyFeed: {
    screen: MyFeedTab,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/tabs/ic_profile.png')
              : require('~/Assets/Images/tabs/ic_profile_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Feeds: {
    screen: Feeds,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/tabs/ic_search.png')
              : require('~/Assets/Images/tabs/ic_search_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Upload: {
    screen: UploadTab,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/tabs/ic_add.png')
              : require('~/Assets/Images/tabs/ic_add_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/tabs/ic_favorite.png')
              : require('~/Assets/Images/tabs/ic_favorite_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/tabs/ic_profile.png')
              : require('~/Assets/Images/tabs/ic_profile_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
});

const MainNavigator = createDrawerNavigator(
  {
    MainTabs,
  },
  {
    drawerPosition: 'right',
    drawerType: 'slide',
    contentComponent: Drawer,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
    MainNavigator,
  },
  {
    initialRouteName: 'CheckLogin',
  },
);

export default createAppContainer(AppNavigator);
