import React, { Component } from 'react'

import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'; 
import _ from 'underscore'; 
import { withRouter } from '../Routing'; 


class ShowViolations extends Component {

      render = (props) => {
        const { title } = this.props.location.state; 
        console.log("showviolations", title);
        const { match: { params } } = this.props;

        
return (
        <ScrollView >
            <TouchableHighlight
                onPress={() => this.props.history.goBack() } >
                 <Text style={ styles.topbar }>Go Back</Text>

            </TouchableHighlight>

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
            height: 30,
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