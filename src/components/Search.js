import React, { Component } from 'react';
import {  View, Text, StyleSheet, KeyboardAwareScrollView, TextInput, FlatList, List, ListItem, ListView, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
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
            loading: false,
            modalVisible: false,

           
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
          this.textInput.clear()
          
        
        })
        .catch(err => {
          console.log(err) 
        })
      }
      onPress = (item) => {
        this.setState(
            {
                modalVisible: true, 
                selected: item
            });
            console.log('====================================');
            console.log("this is selected item", this.state.selected);
            console.log('====================================');

      }
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
        console.log('====================================');
        console.log("this is modal visible", this.state.modalVisible);
        console.log('====================================');
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
            style={styles.search}
            placeholder='Search (Eateries, Bars, Coffee Shops ...)'
            returnKeyType='search'
            // value={this.state.searchText}
            onChangeText={(text) => this.setState({text})}
            // onChange={this.setSearchText}
            clearButtonMode="while-editing" 
            onSubmitEditing={this.submitSearch}
            ref={input => { this.textInput = input }} 
            // autoGrow={true}
          
            />
            { this.state.modalVisible ?
            <ShowLocation
                modalVisible={ this.state.modalVisible }
                setModalVisible={ (vis) => { this.setModalVisible(vis) }}
                data={ this.state.selected }
            /> : null }

            {/* {this.state.results ? <SearchList navigation={this.props.navigation} results={this.state.results}/> : <Text></Text>} */}
            { /*this.state.results ? <SearchList title={this.state.results}/> : <Text> State Isn't Set </Text> */}
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
      height: 50,
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48bbec', 
      width: '75%',
      alignSelf: 'center', 
      margin: 10, 

  }
      
  
}); 