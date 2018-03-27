import React, { Component } from 'react'
import { TouchableOpacity, View, Text, FlatList, List, ListItem } from 'react-native'

class SearchList extends Component {

    
    

    
    
    _onPress = () => {
      this.props.onPressItem(this.props.title.camis);
    };
  
    render() {
        console.log("inside search list", this.props);
      return (
          <List> 
              <FlatList
                
                data={this.props.title.dba}
                renderItem={({ item }) => (
                    <ListItem
                        onPress={this._onPress}
                        title={item}
                />
                
                )}
            />
        </List>
      );
    }
  }

  export default SearchList; 
//   subtitle={`${item.bldg} ${item.street} ${item.boro} ${item.zip}`}
