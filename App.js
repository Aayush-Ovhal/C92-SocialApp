import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Question from './screens/questionScreen';
import Signup from './screens/Signup';
import Login from './screens/Login'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
 WelcomeScreen: Question,
 QuestionScreen: Signup,
 LogIn: Login
})

const AppContainer = createAppContainer(SwitchNavigator);