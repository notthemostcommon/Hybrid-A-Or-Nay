import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from './components/HomeScreen'; 


export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <HomeScreen /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 16,
    color: 'white'
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center', 
    color: 'white'
  }
})