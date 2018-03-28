import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image, Animated, Easing, TouchableOpacity, Button} from 'react-native';
import Header from './Header'; 
import Reviews from './Reviews'; 
import axios from 'axios'; 
import ReviewForm from './ReviewForm'; 


class ShowLocation extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
        modalVisible: false,
        selected: false,
        reviews: '', 
        startReview: false, 
    };
    this.startReview = this.startReview.bind(this); 
  }

  componentDidMount() {
      axios.get('/reviews')
      .then( data => 
        this.setState({
            reviews: data
        }))
  }

  startReview(){
      this.setState(prevState => ({
          startReview: !prevState.startReview, 
      }))
  }
  

  render() {

    const { selected } = this.state
    const { fill, size } = this.props

    return (
      <View style={styles.container}>
        <Header/>
        
        <Modal
        
            presentationStyle="fullScreen"
            animationType="slide"
            transparent={false}
            visible={this.props.modalVisible}
            style={styles.container}
           >
           <TouchableHighlight
                onPress={() => {
                  this.props.setModalVisible(!this.props.modalVisible);
                }}>
                <Text style={styles.exit}>X</Text>
              </TouchableHighlight>
          <View style={{marginTop: 22}}>
            <View>
              <Text style={styles.h1}>{this.props.data.dba}</Text>
              <Text style={styles.grade}>{this.props.data.grade}</Text>
              <Text style={styles.h3}>{`${this.props.data.building} ${this.props.data.street} ${this.props.data.boro} ${this.props.data.zipcode}`}</Text>


              
            </View>
          </View>

          {this.state.startReview ? <ReviewForm data={this.props.data} startReview={this.startReview} /> : null }

          {this.state.reviews ? <Reviews reviews={this.state.reviews}/> : 
          this.state.startReview ? null :
          <View> 
            <Text>Be the First to Review {this.state.dba} </Text>
                <TouchableHighlight
                    onPress={this.startReview}
                    
                    >
                    <Text style={{color: 'blue'}}>Start One Now!</Text>
                </TouchableHighlight>
             </View>
                }

        </Modal>
      </View>
    );
  }
}

export default ShowLocation; 


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F5FCFF', 
        padding: 10, 
        textAlign: 'center', 
        marginTop: 22, 
        width: '100%', 

    },
    grade: {
      flex: 1,
      justifyContent: 'flex-end', 
      fontSize: 25, 
      color: "green", 
      fontWeight: "bold", 
      padding: 5, 
      alignSelf: 'center'
    }, 
    exit: {
        flex: 1, 
        flexDirection: 'row',
        alignSelf: 'flex-end', 
        backgroundColor: 'red', 
        marginTop: -5, 
        color: 'white', 
        borderColor: '#8B0000', 
      
        padding: 5, 
        fontWeight: 'bold'
    }, 
    h1: {
        fontSize: 19,
        fontWeight: 'bold',
      },
    h3: {
        fontSize: 15, 
    }, 
}); 