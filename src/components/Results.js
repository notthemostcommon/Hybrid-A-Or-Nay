
import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'; 
import Header from './Header'; 
import _ from 'underscore'; 
import { withRouter, Link } from '../Routing'; 
import PropTypes from 'prop-types';


class Results extends Component {
  
  render() {
    const { results } = this.props.location.state; 
    
    return (
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
                        
                        <View style={styles.list} key={item.camis} >
                          <Link 
                            // style={{ textDecoration: 'none' }}
                            to={ {
                              pathname:`location/${item.camis}`,
                              state: { results: results }
                            }
                          } >
                            <View>
                                  
                                {/* <TouchableOpacity onPress={() => console.log("clicked")} > */}
                                    <Text style={styles.h1}> {item.dba}  </Text>
                                    <Text style={styles.h3}> {`${item.building} ${item.street} ${item.boro} ${item.zipcode}`} </Text>
                              {/* </TouchableOpacity>  */}
                            </View>
                        </ Link> 
                     </View>
                  )}
                )}
              </ScrollView>

     
      
    </ImageBackground>
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
  grade: {
    flex: 1,
    justifyContent: 'flex-end', 
    fontSize: 25, 
    color: "green", 
    fontWeight: "bold", 
    padding: 5, 
    alignSelf: 'center'
  }, 
  exit: {
      flex: 1, 
      flexDirection: 'row',
      alignSelf: 'flex-end', 
      backgroundColor: 'red', 
      marginTop: 50, 
      color: 'white', 
      borderColor: '#8B0000', 
      width: 20, 
      height: 20, 
      padding: 5, 
      fontWeight: 'bold'
  }, 
  h1: {
      flexDirection: 'row', 
      alignSelf: 'flex-start',
      fontSize: 19,
      fontWeight: 'bold',
      textDecorationLine: 'none'
    },
  h3: {
      fontSize: 15, 
      textDecorationLine: 'none'

  }, 
  box: {
    margin: 10,
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 30,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    },
    list: {
      flex: 1, 
      width: '85%', 
      alignSelf: 'center',
      justifyContent: 'flex-start', 
      backgroundColor: '#F5FCFF',
      padding: 10,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      margin: 1, 
      top: 50, 

    }, 
    listContainer: {
      width: '75%', 
      height: '100%', 
      alignSelf: 'center',
      justifyContent: 'center', 
      top: 50, 

    }
}); 