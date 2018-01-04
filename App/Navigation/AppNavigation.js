import { StackNavigator, TabNavigator } from 'react-navigation'
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AboutScreen from '../Containers/AboutScreen'
import WalletScreen from '../Containers/WalletScreen'
import ProgramScreen from '../Containers/ProgramScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'DASHBOARD' : ''),
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name={'home'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  ProgramScreen: {
    screen: ProgramScreen,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'PROGRAM' : ''),
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name={'calendar'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  WalletScreen: {
    screen: WalletScreen,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'WALLET' : ''),
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name={'tachometer'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'ABOUT' : ''),
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name={'info-circle'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
}, {
  // Default config for all screens
  headerMode: 'none',
    initialRouteName: 'DashboardScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
