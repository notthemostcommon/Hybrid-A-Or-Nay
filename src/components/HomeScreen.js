import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View, 
  Image, 
  ImageBackground 
} from 'react-native';
import { withRouter } from '../Routing'; 
import Search from './Search'; 

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

  getResults = (data, text) => {
      this.setState({
        results: data, 
        text: text
      })
      
        this.props.history.push({
          pathname: '/locations',
          state: { results: this.state.results, text: this.state.text }

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
                    <View style={styles.wrapper} > 
                      <Image 
                        style={styles.logo}
                        resizeMode="cover"
                        source={require('../assets/A-or-Nay-outlines_Transparent8.png')}/>   
                                            </View>

                        <Text style={{alignSelf: 'center', top: -150}}>
                          <Text style={styles.quote}> Discover Your Favorite Restaurants</Text>
                          <Text>                    </Text>
                          <Text style={styles.italics} > And What You Never Wanted to Know</Text>
                        </Text>

                   
                  
              
                
              </View>
             
            </ImageBackground>
        );
      }
    }
  
    export default withRouter(HomeScreen)
  
    const styles = StyleSheet.create({
      
      logo: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center', 
        alignContent: 'center',
        width: 500, 
        height: 500, 
        
        
      },
      wrapper: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center', 
        alignContent: 'center',
        top: -200, 
      }, 

        quote: {
          fontSize:17,
          paddingTop: 20,
          flex: 1, 
          // alignSelf: 'center',
          fontFamily: 'Arial',
          fontWeight: '700',
          textAlign: 'center',
          color: '#007BCA', 
          margin: 20, 
       
      }, 
      
        italics: {
          fontSize: 17,
          fontFamily: 'Arial',
          fontWeight: '700',
          textAlign: 'center',
          color: '#007BCA', 
          margin: 20, 
  
        }
      
      
    });
    
    
  