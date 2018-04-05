import React, { Component } from 'react';
import {  View, Text, StyleSheet, KeyboardAwareScrollView, TextInput, FlatList, List, ListItem, ListView, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import Indicator from './ActivityIndicator'; 
import { Route } from '../Routing'; 
import ShowLocation from './ShowLocation'; 
import Results from './Results'; 


export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            text: '', 
            loading: false,

           
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
          
          this.props.getResults(data, this.state.text); 
        
          
          // this.textInput.clear()
          
        })
        .catch(err => {
          console.log(err) 
        })
      }
    
      
  render() {
    
    return (
        <View style={{width: '100%', height: '100%', }} > 

        {this.state.loading && <Indicator/>}
        <Text style={{ flexDirection: 'row', fontSize: 18 }} >
          <TextInput
              autoFocus={true}
              style={{  width: 325,  height: 50, borderColor: '#48bbec', borderWidth: 3, borderRadius: 15, backgroundColor: 'white', paddingLeft: 10, }}
              placeholder='     Search (Eateries, Bars, Coffee Shops ...)'
              returnKeyType='search'
              onChangeText={(text) => this.setState({text})}
              clearButtonMode="while-editing" 
              onSubmitEditing={this.submitSearch}
              ref={input => { this.textInput = input }}           
              />
          </Text>
          

              

        </View>    
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  search: {
    
    
    backgroundColor:'white', 
    
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
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#48bbec', 
      // width: '75%',
      alignSelf: 'center', 
      margin: 25, 
      color: 'black', 
      backgroundColor: 'white',

  }
      
  
}); 