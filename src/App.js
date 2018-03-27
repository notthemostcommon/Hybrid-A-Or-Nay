import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from './components/HomeScreen'; 
import { Router, Switch, Route, Link } from './Routing'; 
import SearchList from './components/SearchList'; 
import ShowLocation from './components/ShowLocation'; 
import Search from './components/Search'; 

 

const HomeComponent = () => (
  <HomeScreen />
)
const ResultsComponent = () => {
  <SearchList />
}
const LocationComponent = () => {
  <ShowLocation />
}



export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/results" component={ResultsComponent} />
          <Route path="/location" component={LocationComponent} />
        </Switch>
      </Router>
     
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