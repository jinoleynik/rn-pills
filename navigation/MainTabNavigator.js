import React from 'react';
import { Platform, Icon, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MedicationScreen from '../screens/MedicationScreen';
import MedicationDetailsScreen from '../screens/MedicationDetailsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import UserScreen from '../screens/UserScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const MedicationStack = createStackNavigator(
  {
    Medication: MedicationScreen,
    MedicationDetails: MedicationDetailsScreen
  },
  config
);

MedicationStack.navigationOptions = {
  tabBarLabel: 'Medications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-medkit' : 'md-medkit'} />
  ),
};

MedicationStack.path = '';

const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen,
  },
  config
);

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

CalendarStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MedicationStack,
  CalendarStack,
});

tabNavigator.navigationOptions =() => ({
  title: 'Home page'
});

tabNavigator.path = '';


const UserStack = createStackNavigator(
  {
    User: UserScreen,
  },
  config
);

UserStack.navigationOptions = {
  drawerLabel: 'User page'
}

UserStack.path = '';

const drawerNavigator = createDrawerNavigator({
  HomePage: tabNavigator,
  UserPage: UserStack
})


export default drawerNavigator;
