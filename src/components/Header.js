import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    render() {
        return (

            <View style={{margin: 50, paddingTop: 40, paddingBottom: 40, backgroundColor:'white'}}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Text style={{ flex: 1 }}></Text>
                <Text style={{ flex: 1, textAlign: 'center'}}></Text>
                <Text style={{ flex: 1, textAlign: 'right'}}></Text>
                </View>
            </View>
                    
        );
    }
}

export default Header;
