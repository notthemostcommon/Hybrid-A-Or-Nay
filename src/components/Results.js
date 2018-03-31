
import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'; 
import Header from './Header'; 
import _ from 'underscore'; 
import { withRouter } from '../Routing'; 
import PropTypes from 'prop-types';


class Results extends Component {
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }
  render() {
    // console.log("results props", this.props.location.state);
    console.log( this.props.location.state.results );
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

          

          {/* <Header getResults={this.getResults}/> */}

          
            <View > 
                { _.uniq( results, false, (location => {
                   return location.camis
                       })).map((item, i) => {
                    
                        return (
                          <TouchableOpacity onPress={() => this.onPress(item)} style={styles.list} key={item.camis}>
                          <Text style={styles.h1}> {item.dba} </Text>
                          <Text style={styles.h3}> {`${item.building} ${item.street} ${item.boro} ${item.zipcode}`} </Text>
                        </TouchableOpacity> 
                    )}
                )}
                </View>

     
      
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
      fontSize: 19,
      fontWeight: 'bold',
    },
  h3: {
      fontSize: 15, 
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
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }, 
}); 