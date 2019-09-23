import { LoginScreen } from '../screens/LoginScreen';
import { MainScreen } from '../screens/MainScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const LoginNavigator = createAppContainer(createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: MainScreen
  },
}));


export const MenuNavigator = createAppContainer(createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen
  },
}));

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator({
    LoginNavigator: {
      screen: LoginNavigator
    },
    MenuNavigator: {
      screen: MenuNavigator
    },
  },
    {
      initialRouteName: signedIn ? 'MenuNavigator' : 'LoginNavigator'
    }
  );
};



