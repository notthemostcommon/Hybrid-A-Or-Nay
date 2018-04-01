import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image, Animated, Easing, TouchableOpacity, Button} from 'react-native';
import Header from './Header'; 
import Reviews from './Reviews'; 
import axios from 'axios'; 
import ReviewForm from './ReviewForm'; 
import { withRouter } from '../Routing'; 
import StarRating from './StarRating'; 


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

  // componentDidMount() {
  //     axios.get('/reviews')
  //     .then( data => 
        
  //       this.setState({
  //           reviews: data
  //       }))
  //       console.log("data", this.state.reviews)

  // }

  startReview(){
      this.setState(prevState => ({
          startReview: !prevState.startReview, 
      }))
  }
  

  render() {
    const { results } = this.props.location.state; 
    console.log("this is show location" , results    );
    const { selected } = this.state
    const { fill, size } = this.props
    const nested = []; 

    results.forEach(d => {
        findItems(d)
    })
    
    function findItems(date) {
        let obj = {};
        let newData = nested.filter(d => { 
            return d.key == date.inspection_date } )
        if( newData.length != 0){ 
            newData[0].values.push(date.violation_description)
        } else {
            obj.key = date.inspection_date
            obj.values = [date.violation_description]
            nested.push(obj)
        }
    }
        console.log("nested", nested)
    

    return (
      <View style={styles.container}>
        <Header/>

        <View style={{marginTop: 22}}>
            <View>
              <Text style={styles.h1}>{results[0].dba}</Text>
              <Text style={styles.grade}>{results[0].grade}</Text>
              <Text style={styles.h3}>{`${results[0].building} ${results[0].street} ${results[0].boro} ${results[0].zipcode}`}</Text>
            </View>
            <StarRating/>
             
          </View>
        
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

export default withRouter(ShowLocation); 


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F5FCFF', 
        padding: 10, 
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
        marginTop: 50, 
        color: 'white', 
        borderColor: '#8B0000', 
        width: 20, 
        height: 20, 
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