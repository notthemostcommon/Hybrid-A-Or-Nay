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
               <Search />
            
                    <ImageBackground 
                        source={Background}
                        resizeMode={'cover'}
                        style={styles.logo}>

                        <Text style={styles.text}> Discover Your Favorite Restaurants</Text>
                
                    <Image 
                    style={{width: '50%', height: '50%'}}
                    source={require('../assets/A-or-Nay-outlines_Transparent8.png')}/>              
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
        paddingTop: 10
      },
      icon: {
        // flex: 1, 
        justifyContent: 'flex-start',
        // height: '100%', 
        width: '100%', 
        padding: 10,  
        paddingTop: -10, 
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
          // flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          zIndex: 2,
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
    
    
  