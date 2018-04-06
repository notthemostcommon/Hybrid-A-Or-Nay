import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen'; 
import { Router, Switch, Route } from './Routing'; 
import ShowLocation from './components/ShowLocation'; 
import Results from './components/Results'; 
import ReviewForm from './components/ReviewForm'; 
import ReviewEditForm from './components/ReviewEditForm'; 
import ShowViolations from './components/ShowViolations'; 


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
const ReviewComponent = () => {
  return (
  <ReviewForm />
  )
}

const ReviewEditComponent = () => {
   return (
     <ReviewEditForm />
   )
  }

  const ViolationComponent = () => {
    return (
      <ShowViolations />
    )
  }


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/locations" component={ResultsComponent} />
          <Route  exact path="/location/:id" component={LocationComponent} />
          <Route  exact path="/location/:id/review" component={ReviewComponent} />
          <Route  exact path="/review/:id/edit" component={ReviewEditComponent} />
          <Route  exact path="/location/:id/violations" component={ViolationComponent} />
        </Switch>
      </Router>
     
    )
  }
}
