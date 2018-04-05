import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View, 
  Image, 
  ImageBackground,
  ScrollView 
} from 'react-native';
import Header from './Header';
import { Route, Link, withRouter, Redirect } from '../Routing'; 
import Results from './Results'; 
import Search from './Search'; 
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
  }

  getResults = (data) => {
    // console.log("returned data", data)
      this.setState({results: data})
      // console.log("this is state", this.state.results);
      
        this.props.history.push({
          pathname: '/locations',
          state: { results: this.state.results }

           })
          }
    render() {
      
        return (
            <ImageBackground 
              source={require('../assets/Red_Tablecloth_gw7h60.png')}
              resizeMode="cover"
              style={{
                flex: 1, 
                height: null, 
                width: null, 
                }}>
              <View style={{flex: 1, width: '100%', margin: 20}}>

                  <Text style={{flex: 1, width: '80%', marginTop: 50, borderRadius: 15}}> <Search getResults={this.getResults}/>
                     
                    </Text>
                    <Image 
                      style={styles.icon}
                      resizeMode="cover"
                      source={require('../assets/A-or-Nay-outlines_Transparent8.png')}/>   
                       <Text style={{alignSelf: 'flex-start'}}>
                        <Text style={styles.text}> Discover Your Favorite Restaurants</Text>
                        <Text style={styles.italics} > And What You Never Wanted to Know</Text>
                      </Text>
                  
              
                
              </View>
             
            </ImageBackground>
        );
      }
    }
  
    export default withRouter(HomeScreen)
  
    const styles = StyleSheet.create({
      
      icon: {
        flex: 1, 
        alignSelf: 'center', 
        width: 500, 
        height: 500, 
        top: -200
        
      },
      // search: {
      //   flex: 1, 
      //   marginTop: 50, 
      //   backgroundColor:'white', 
      //   justifyContent: 'center',
      //   height: 50,
      //   width: 300,   
      // },
      // homeLayout: {
      //   flex: 1, 
      //   flexDirection: 'row', 

      // }, 
       
        text: {
          fontSize: 20,
          paddingTop: 20, 
          fontFamily: 'Arial',
          fontWeight: '700',
          textAlign: 'center',
          color: '#007BCA', 
          margin: 20, 
       
      }, 
      
        italics: {
          fontSize: 20,
          marginBottom: 15, 
          fontFamily: 'Arial',
          fontWeight: '700',
          textAlign: 'center',
          color: '#007BCA', 
          margin: 20, 
  
        }
      
      
    });
    
    
  