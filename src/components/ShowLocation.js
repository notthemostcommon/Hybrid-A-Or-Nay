import { View, Text } from 'react-native'
import React, { Component } from 'react'

export default class ShowLocation extends Component {
  render() {
      console.log("show location", this.props);
      
    return (
      <View>
          <Text>This is Show Location </Text>
        <Text>{this.props.dba}</Text>
      </View>
    )
  }
}
