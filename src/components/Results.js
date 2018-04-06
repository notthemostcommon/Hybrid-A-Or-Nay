
import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'; 
import _ from 'underscore'; 
import { withRouter, Link } from '../Routing'; 



class Results extends Component {
  
  render() {
    const { results } = this.props.location.state; 
    const { text } = this.props.location.state; 
    console.log("this is search text", text);
    

    
    return (
      <ScrollView>
          <View style={{height: 110,  padding: 20,  backgroundColor:'#ADDDDD', justifyContent: 'center',flexDirection: 'row', alignItems:'center'}}>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                  <TouchableOpacity 
                      onPress={() => this.props.history.goBack()}
                      style={{ flex: 1 }} >
                      <Image 
                        source={require("../assets/004-arrows.png")}
                        style={{height: 30, width: 30, top: 15, alignSelf: 'flex-start'}} 
                        />
                    </ TouchableOpacity> 
                  <Text style={styles.h2}>{text}</Text>
                  
                  <Text style={{ flex: 1, textAlign: 'center'}}></Text>
                  
                </View>
              </View>
           
          <ImageBackground 
            source={require('../assets/Red_Tablecloth_gw7h60.png')}
            resizeMode="cover"
            style={{
              flex: 1, 
              height: null, 
              width: null, 
              }}>

            <ScrollView  > 
              { _.uniq( results, false, (location => {
                  return location.camis
                      })).map((item, i) => {
                  
                      return (
                        
                        <View  key={item.camis} >
                          <Link 
                            to={ {
                              pathname:`location/${item.camis}`,
                              state: { results: results }
                            }
                          } >
                            <View style={styles.list}>
                                  <View> 
                                {/* <TouchableOpacity onPress={() => console.log("clicked")} > */}
                                    <Text style={styles.h1}> {item.dba}  </Text>
                                    <Text style={styles.h3}> {`${item.building} ${item.street} ${item.boro} ${item.zipcode}`} </Text>
                              {/* </TouchableOpacity>  */}
                              </View>
                              <Text style={{flex: 1, position: 'absolute', right: 5, top:17}} > 
                                 <Image source={require('../assets/003-arrows-1.png')} style={{height: 20, width: 20}} />
                              </Text>
                            </View>
                        </ Link> 
                     </View>
                  )}
                )}
              </ScrollView>
     </ImageBackground>
    </ScrollView>
    
    )
  }
}
export default withRouter(Results); 

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#F5FCFF', 
      padding: 10, 
      marginTop: 22, 
      width: '100%', 

  },
  h2: {
    // flexDirection: 'row', 

    alignSelf: 'flex-end',
    fontSize: 25,
    fontWeight: 'bold',
    textDecorationLine: 'none', 
    flex: 2, 
    paddingTop: 25, 

  },
  
  h1: {
      flexDirection: 'row', 
      alignSelf: 'flex-start',
      fontSize: 15,
      fontWeight: 'bold',
      textDecorationLine: 'none'
    },
  h3: {
      fontSize: 12, 
      textDecorationLine: 'none'

  }, 
    list: {
      flex: 6, 
      width: '90%', 
      alignSelf: 'center',
      justifyContent: 'flex-start', 
      backgroundColor: '#F5FCFF',
      padding: 10,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      margin: 1, 
      top: 10, 
      borderRadius: 7,

    }, 
    
}); 