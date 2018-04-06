import React, { Component } from 'react'

import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'; 
import _ from 'underscore'; 
import { withRouter } from '../Routing'; 


class ShowViolations extends Component {

      render = (props) => {
        const { title } = this.props.location.state; 
        const { match: { params } } = this.props;

        
return (
        <ScrollView >
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
                  <Text style={{flex: 1}}></Text>
                  
                  <Text style={{ flex: 1, textAlign: 'center'}}></Text>
                  
                </View>
              </View>

            <Text style={styles.heading} >Violations for {params.id} </Text>
        
          {_.sortBy(title, 'key').reverse().
          map( (d, i)  => (
            <View style={styles.list} key={i} >
             <Text key={d.key}> 
              <Text style={styles.h1}>  
                {new Date(d.key).toISOString().split('T')[0]} 
              </Text>
             </Text>
             {d.values.map((d, i) => (
              <Text style={styles.h3} key={i+i}>  
                <Text>{d}</Text>
           
           
             </Text>
              ))}
            </View>
          ))}
  
        </ScrollView>
          
)}
    }; 

    export default withRouter(ShowViolations); 
  
    const styles = StyleSheet.create({
        list: {
            flex: 1, 
            width: '85%', 
            alignSelf: 'center',
            justifyContent: 'flex-start', 
            backgroundColor: '#F5FCFF',
            padding: 10,
            borderBottomColor: '#bbb',
            borderBottomWidth: StyleSheet.hairlineWidth,
            margin: 2, 
            top: 25, 
      
          }, 
          heading: {
            alignSelf: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 25, 
          },
        h1: {
            alignSelf: 'flex-start',
            fontSize: 19,
            fontWeight: 'bold',
          },
        h3: {
            borderTopWidth: StyleSheet.hairlineWidth,

            fontSize: 15, 
            padding: 10
        }, 
        topbar: {
            // height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding:10,
            backgroundColor: '#202646',
            borderRadius:5,
            height: 'auto', 
            width: 75, 
            marginTop: 15, 
            color: '#F5FCFF', 
            marginRight: 10, 
          },
          
        });