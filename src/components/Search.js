import React, { Component } from 'react';
import {  View, Text, StyleSheet, KeyboardAwareScrollView, TextInput, FlatList, List, ListItem, TouchableOpacity } from 'react-native';
import SearchList from './SearchList';
import Indicator from './ActivityIndicator'; 
import _ from 'underscore'; 
import { Route } from '../Routing'; 
// import { Header } from 'react-native-elements'; 
// import { withNavigation } from 'react-navigation';
import ShowLocation from './ShowLocation'; 
// import { Header } from 'native-base'; 


export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            text: '', 
            results: '', 
            loading: false
           
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
          this.setState({
            results: data, 
            loading: false, 
          })
          console.log(this.state.results);
          
        //   _.uniq(this.state.results, false, (location => {
        //     return location.camis
        //   })).length > 1 ?

        //   <Route path='/results' render={routeProps => <SearchList {...routeProps} title={this.state.results}/>} />
        //     :
        //     <Route 
        //     path="/location" 
        //     component={() =>  <ShowLocation {...this.state.results} />}
        //      /> 
          
        })
        .catch(err => {
          console.log(err) 
        })
      }
      
      
      
      
  render() {
    // const {navigate} = this.props.navigation
    // const arrayResults = _.toArray(this.state.results); 
   
    return (

        
        <View> 

      
        {this.state.loading ? <Indicator/> : null}

       
        <TextInput
            // showLoading
            // name="search"
            autoFocus={true}
            // cancelButtonTitle="Cancel"
            placeholder='Search'
            returnKeyType='search'
            // value={this.state.searchText}
            onChangeText={(text) => this.setState({text})}
            // onChange={this.setSearchText}
            clearButtonMode="while-editing" 
            onSubmitEditing={this.submitSearch}
            // autoGrow={true}
          
            />
            {/* {this.state.results ? <SearchList navigation={this.props.navigation} results={this.state.results}/> : <Text></Text>} */}
            { /*this.state.results ? <SearchList title={this.state.results}/> : <Text> State Isn't Set </Text> */}
            {this.state.results ?
            <View>
              <List> 
                <FlatList
                  
                  data={this.state.results}
                  renderItem={({ item }) => (
                      <ListItem
                          onPress={this._onPress}
                          title={item.dba}
                  />
                  
                  )}
              />
        </List>
        </View>

            
            
            : <Text>There's Nothing Here</Text> }


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
  }
}); 