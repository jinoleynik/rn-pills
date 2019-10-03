import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MedicationScreen from '../screens/MedicationScreen';
import MedicationDetailsScreen from '../screens/MedicationDetailsScreen';
import CalendarScreen from '../screens/CalendarScreen';

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

tabNavigator.path = '';

export default tabNavigator;
