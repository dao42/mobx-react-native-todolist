import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from '../containers/welcome_screen'

const Navigation = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
});

export default Navigation
