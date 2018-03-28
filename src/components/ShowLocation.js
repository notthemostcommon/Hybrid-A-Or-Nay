import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image, Animated, Easing, TouchableOpacity} from 'react-native';
import Header from './Header'; 
import Reviews from './Reviews'; 
import axios from 'axios'; 


class ShowLocation extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
        modalVisible: false,
        selected: false,
        reviews: '', 
    };
  }

  componentDidMount() {
      axios.get('http://localhost:8080/reviews')
      .then( data => 
        this.setState({
            reviews: data
        }))
  }


  

  render() {

    const { selected } = this.state
    const { fill, size } = this.props

    return (
      <View style={{marginTop: 22}}>
      <Header/>
        <Modal
            presentationStyle="fullScreen"
            animationType="slide"
            transparent={false}
            visible={this.props.modalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>{this.props.data.dba}</Text>
              <Text style={styles.grade}>{this.props.data.grade}</Text>
              <Text>{`${this.props.data.building} ${this.props.data.street} ${this.props.data.boro} ${this.props.data.zipcode}`}</Text>


              <TouchableHighlight
                onPress={() => {
                  this.props.setModalVisible(!this.props.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>

          {this.state.reviews ? <Reviews reviews={this.state.reviews}/> : <Text>Be the First to Review "${this.state.dba}"</Text>}
        </Modal>
      </View>
    );
  }
}

export default ShowLocation; 


const styles = StyleSheet.create({
    grade: {
      flex: 1,
      justifyContent: 'flex-end', 
      fontSize: 25, 
      color: "green", 
      fontWeight: "bold"
    }
}); 