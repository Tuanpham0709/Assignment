/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack'
import Register from './screens/Register';
import Notification from './screens/NotificationScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CreatePostScreen from './screens/createPostScreen';
import { StatusBar, Platform, Text } from 'react-native'
import TabBarIcon from './components/TabBarIcon'
const stackNavigationOptions = ({ navigation }) => ({
  headerTintColor: '#4081df',
  headerRight: null,
  headerStyle: {
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    elevation: 0,
    height: StatusBar.currentHeight() + Platform.OS === "ios" ? 24 : 50
  },
  headerBackTitle: " ",

})
const tabStackNavigatorRoutes = {
  home: HomeScreen,
  notification: Notification
}
const tabStackNavigatorConfig = {
  navigationOptions: ({ navigation }) => {
    return stackNavigationOptions({ navigation });
  }
}
const createTabsStackNavigator = (stackConfigs, navigationOptions) => {
  const stackNavigator = createStackNavigator(tabStackNavigatorRoutes, Object.assign({}, tabStackNavigatorConfig, stackConfigs))
  stackNavigator.navigationOptions = navigationOptions;
  return stackNavigator;
}
const homeTabStackNavigator = createTabsStackNavigator({
  initialRouteName: "home"
},
  {
    tabBarIcon: ({ focused, _, tintColor }) => (
      <TabBarIcon
        focused={focused}
        iconName={'list'}
        tintColor={tintColor}

      />
    ),
    tabBarLabel: ({ focused, _, tintColor }) => <Text style={[focused && { color: "#fff" }, { fontSize: 16, color: "gray" }]}>Home</Text>
  }
)
const notificationTabStackNavigator = createTabsStackNavigator({
  initialRouteName: "notification"
},
  {
    tabBarIcon: ({ focused, _, tintColor }) => (

      <TabBarIcon
        focused={focused}
        iconName={'notifications'}
        tintColor={tintColor}
      />
    ),
    tabBarLabel: <Text style={{ fontSize: 16, color: "gray" }}>Notifications</Text>
  }
)

const tabsStackNavigatorRoute = {
  home_tab: homeTabStackNavigator,
  notification_tab: notificationTabStackNavigator
}
const tabNavigatorConfig = {
  initialRouteName: "home_tab",
  tabBarOptions: {
    activeTintColor: '#1078ff',


  },
}
const tabNavigator = createBottomTabNavigator(tabsStackNavigatorRoute, tabNavigatorConfig);
tabNavigator.navigationOptions = ({ navigation }) => {
  return {
    header: null
  }
}
const mainStackNavigatorRoute = {
  main_tabs: { screen: tabNavigator },
  create_post: { screen: CreatePostScreen }
}
const mainStackNavigatorConfig = {
  initialRouteName: "main_tabs"
}
const mainStackNavigator = createStackNavigator(mainStackNavigatorRoute, mainStackNavigatorConfig);
mainStackNavigator.navigationOptions = ({ navigation }) => {
  return { header: null }
}
const modalStackNavigatorRoute = {
  main_stack: { screen: mainStackNavigator },
  login: { screen: LoginScreen },
  register: { screen: Register }
};
const modalStackNavigatorConfig = {
  initialRouteName: "main_stack",
}
const modalStackNavigator = createStackNavigator(modalStackNavigatorRoute, modalStackNavigatorConfig);

const AppContainer = createAppContainer(modalStackNavigator)
const App: () => React$Node = () => {
  return (
    <AppContainer />
  );
}

export default App;
