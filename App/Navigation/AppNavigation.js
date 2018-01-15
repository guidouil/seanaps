import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Image } from 'react-native';
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
      tabBarLabel: 'Dashboard',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/images/icn-dashboard.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  ProgramScreen: {
    screen: ProgramScreen,
    navigationOptions: {
      tabBarLabel: 'Program',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/images/icn-program.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  WalletScreen: {
    screen: WalletScreen,
    navigationOptions: {
      tabBarLabel: 'Wallet',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/images/icn-wallet.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/images/icn-about.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DashboardScreen',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: {
    headerStyle: styles.header
  },
  tabBarOptions: {
    activeTintColor: '#000000',
  },
})

export default PrimaryNav
