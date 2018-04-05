import React, { Component } from 'react';
import { View } from 'react-native';
import Search from "./Search"; 

class Header extends Component {
    render() {
        return (

            <View style={{marginTop: 50, marginLeft: 50, marginRight: 50,  padding: 20,  backgroundColor:'white', justifyContent: 'center'}}>
                <Search getResults={this.props.getResults} />  
                {/* <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Text style={{ flex: 1 }}></Text>
                <Text style={{ flex: 1, textAlign: 'center'}}></Text>
                <Text style={{ flex: 1, textAlign: 'right'}}></Text>
                </View> */}
            </View>
                    
        );
    }
}

export default Header;
