import React, { Component } from 'react';
import  {
  StyleSheet,
  TouchableHighlight,
  Text,
  View, 
  ImageBackground, 
  Image
} from 'react-native';
import Background from '../assets/Red_Tablecloth_gw7h60.png'; 
import Search from  './Search'; 
import Header from './Header';

class HomeScreen extends Component {



    render() {
        
  
        return (
        
        
           <View> 
               <Header />
               
                     <ImageBackground 
                        source={Background}
                        resizeMode={'cover'}
                        style={{width: '100%'}}

                        >
                        <Text style={styles.text}> Discover Your Favorite Restaurants</Text>
                        <Image 
                          style={styles.icon}
                          source={require('../assets/A-or-Nay-outlines_Transparent8.png')}/>   
                            
                        <Search />  
                          
                              
                    <Text style={styles.italics} > And What You Never Wanted to Know</Text>
                </ImageBackground>
               
              </View>
           
      
        );
      }
    }
  
    export default HomeScreen
  
    const styles = StyleSheet.create({
      container: {
        // flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: 'white',
        // padding: 10,
        paddingTop: 10, 
        zIndex: -1, 
      },
      icon: {
        // flex: 2, 
        justifyContent: 'center',
        alignSelf: 'center', 
        // height: '100%', 
        width: '30%', 
        height: '30%', 
        padding: 10,  
        // paddingTop: -10, 
        // marginTop: 150,
        zIndex: 10
        // backgroundColor: '#4682B4'
      },
      search: {
        backgroundColor: '#48BBEC',
        // alignSelf: 'stretch',
        // alignItems: 'flex-end',
        marginTop: 10,
        justifyContent: 'flex-end'
      },
        logo: {
          flex: 1, 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          zIndex: 0,
      },
        text: {
          fontSize: 20,
          marginBottom: 15, 
          fontFamily: 'ChalkboardSE-Regular',
          fontWeight: '700',
          textAlign: 'center',
      }, 
      
        italics: {
          fontSize: 'italics', 
          fontSize: 20,
          marginBottom: 15, 
          fontFamily: 'ChalkboardSE-Regular',
          fontWeight: '700',
          textAlign: 'center',
  
        }
      
      
    });
    
    
  