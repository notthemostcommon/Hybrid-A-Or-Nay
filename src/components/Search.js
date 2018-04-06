import React, { Component } from 'react';
import {  View, Text, TextInput } from 'react-native';
import Indicator from './ActivityIndicator'; 

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
