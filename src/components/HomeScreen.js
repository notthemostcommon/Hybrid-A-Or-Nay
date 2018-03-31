import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View, 
  Image, 
  ImageBackground, 
} from 'react-native';
import Header from './Header';
import { Route, Link, withRouter, Redirect } from '../Routing'; 
import Results from './Results'; 
import _ from 'underscore'; 

class HomeScreen extends Component {
  constructor(){
    super()
    this.state = {
        text: '', 
        results: '', 
        loading: false,
        modalVisible: false,
        renderResults: false, 
        renderLocation: false,

       
    }
    // this.submitSearch = this.submitSearch.bind(this);
  }

  getResults = (data) => {
    console.log("returned data", data)
      this.setState({results: data})
      console.log("this is state", this.state.results);
      
        this.props.history.push({
          pathname: '/locations',
          state: { results: this.state.results }

           })
        
        
      
    //   _.uniq(data, false, (location => {
    //         return location.camis
    //       })).length > 1 ? 
         
    //         this.setState({ 
    //           results: data, 
    //           renderResults: true
    //       }) 
    //       : 
    //         this.setState({
    //           results: data, 
    //           renderLocation: true
    //         })
    // console.log("this is results", this.state.renderResults);
    // console.log(("this is location", this.state.renderLocation));
    
    
  }
    render() {
      // if ( this.state.renderResults )
      //       return (<Redirect to={{
      //           pathname: '/locations',
      //           state: { referrer: this.state.results }
      //       }} />)
        return (
            <ImageBackground 
              source={require('../assets/Red_Tablecloth_gw7h60.png')}
              resizeMode="cover"
              style={{
                flex: 1, 
                height: null, 
                width: null, 
                }}>

              <Header getResults={this.getResults}/>
              <Image 
                style={styles.icon}
                resizeMode="contain"
                source={require('../assets/A-or-Nay-outlines_Transparent8.png')}/>   
                  
              <Text style={styles.text}> Discover Your Favorite Restaurants</Text>
                 
              <Text style={styles.italics} > And What You Never Wanted to Know</Text>
              {/* {this.state.renderResults && 
              // <Route exact path="/lcoations" render={ (props) => ( <Results results={this.state.results}/>)} />}
                <Redirect              
                    push to={{
                      pathname: "/locations",
                      state: { referrers: this.state.results} }}/>} 

                    {this.state.renderLocation && 
                <Redirect              
                  push to={{
                    pathname: "/location",
                    state: { results: this.state.results} }}/>} */}
            </ImageBackground>
        );
      }
    }
  
    export default withRouter(HomeScreen)
  
    const styles = StyleSheet.create({
      
      icon: {
        flex: 1, 
        justifyContent: 'center',
        alignSelf: 'center', 
        // height: '100%', 
        width: '50%', 
        height: '50%', 
        padding: 10,  
      
      },
      
        logo: {
          flex: 1, 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          zIndex: 0,
      },
        text: {
          fontSize: 20,
          paddingTop: 200, 
          marginBottom: 15, 
          fontFamily: 'ChalkboardSE-Regular',
          fontWeight: '700',
          textAlign: 'center',
          justifyContent: 'space-around'
      }, 
      
        italics: {
          fontSize: 20,
          marginBottom: 15, 
          fontFamily: 'ChalkboardSE-Regular',
          fontWeight: '700',
          textAlign: 'center',
  
        }
      
      
    });
    
    
  