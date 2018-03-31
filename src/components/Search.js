import React, { Component } from 'react';
import {  View, Text, StyleSheet, KeyboardAwareScrollView, TextInput, FlatList, List, ListItem, ListView, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import Indicator from './ActivityIndicator'; 
import _ from 'underscore'; 
import { Route } from '../Routing'; 
// import { Header } from 'react-native-elements'; 
// import { withNavigation } from 'react-navigation';
import ShowLocation from './ShowLocation'; 
import Results from './Results'; 
// import { Header } from 'native-base'; 


export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            text: '', 
            // results: '', 
            loading: false,
            // modalVisible: false,

           
        }
        this.submitSearch = this.submitSearch.bind(this);
      }
      
      submitSearch(){
        this.setState({loading: true})
        
        fetch("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=" +this.state.text)
        .then (res => {
          return res.json();
        })
        .then (data => {
          // console.log(data)
          // let arrayData = _.toArray(data); 
          // let uniqData =_.uniq(this.state.results, false, (location => {
          //       return location.camis
          //     })); 
          // this.setState({
          //   results: data, 
          //   loading: false, 
          this.props.getResults(data); 
          // })
          
          this.textInput.clear()
          //   _.uniq(this.state.results, false, (location => {
          //   return location.camis
          // })).length > 1 ? 
          // <Route path={"/results"} data={this.state.results} /> : 
          // <Route path={"/location"} data={this.state.results} />

          
                  
          
        
        })
        .catch(err => {
          console.log(err) 
        })
      }
      // onPress = (item) => {
      //   this.setState(
      //       {
      //           modalVisible: true, 
      //           selected: item
      //       });
      // }
      // setModalVisible(visible) {
      //   this.setState({modalVisible: visible});
        
      // }
      
      
  render() {
    
    return (
        <View> 

        {this.state.loading && <Indicator/>}

        <TextInput
            autoFocus={true}
            style={{width: '100%', alignSelf: 'center', height: 30, borderColor: '#48bbec', borderWidth: 1
          }}
            placeholder='Search (Eateries, Bars, Coffee Shops ...)'
            returnKeyType='search'
            onChangeText={(text) => this.setState({text})}
            clearButtonMode="while-editing" 
            onSubmitEditing={this.submitSearch}
            ref={input => { this.textInput = input }}           
            />
            {/* { this.state.modalVisible ?
            <ShowLocation
                modalVisible={ this.state.modalVisible }
                setModalVisible={ (vis) => { this.setModalVisible(vis) }}
                data={ this.state.selected }
            /> : null }

            {this.state.results ?
            <View> 
                { _.uniq(this.state.results, false, (location => {
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


            
            
            : null }

            
                    
 */}

        </View>    
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }, 
  list: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }, 
  h1: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  h3: {
      fontSize: 15, 
  }, 
  search: {
      flex: 1, 
      padding: 10, 
      height: 30,
      marginTop: 10,
      // fontSize: 18,
      borderWidth: 1,
      borderColor: '#48bbec', 
      // width: '75%',
      alignSelf: 'center', 
      margin: 25, 
      color: 'black', 
      backgroundColor: 'white',

  }
      
  
}); 