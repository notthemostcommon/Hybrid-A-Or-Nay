import React, { Component } from 'react'
// import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from './components/HomeScreen'; 
import { Router, Switch, Route, Link } from './Routing'; 
import ShowLocation from './components/ShowLocation'; 
// import Search from './components/Search'; 
import Results from './components/Results'; 
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faStar from '@fortawesome/fontawesome-free-solid/faStar'; 
// import faStar from '@fortawesome/fontawesome-free-regular/faStar'; 
import solid from '@fortawesome/fontawesome-free-solid'; 
import regular from '@fortawesome/fontawesome-free-regular'; 


import fontawesome from '@fortawesome/fontawesome'; 


// import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';

 

fontawesome.library.add(solid, regular)


const HomeComponent = () => {
  return (
  <HomeScreen />
  )
}

const ResultsComponent = () => {
  return(
    <Results />

  )
}
const LocationComponent = () => {
  return (
  <ShowLocation />
  )
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/locations" component={ResultsComponent} />
          <Route path="/location/:id" component={LocationComponent} />
        </Switch>
      </Router>
     
    )
  }
}

// const styles = StyleSheet.create({
//   app: {
//     flex: 1
//   },
//   appHeader: {
//     flex: 1,
//     backgroundColor: '#222',
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   appTitle: {
//     fontSize: 16,
//     color: 'white'
//   },
//   appIntro: {
//     flex: 2,
//     fontSize: 30,
//     textAlign: 'center', 
//     color: 'white'
//   }
// })