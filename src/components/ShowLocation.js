import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image, Animated, Easing, TouchableOpacity, Button} from 'react-native';
import Header from './Header'; 
import Reviews from './Reviews'; 
import axios from 'axios'; 
import ReviewForm from './ReviewForm'; 
import { Link, withRouter } from '../Routing'; 
import AvgStarRating from './AvgStarRating'; 

class ShowLocation extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
        modalVisible: false,
        selected: false,
        reviews: '', 
        startReview: false, 
        reviewAverage: 0, 
    };
    this.startReview = this.startReview.bind(this); 
    this.setModalVisible = this.setModalVisible.bind(this); 
  }

  // componentDidMount() {
  //     axios.get('/reviews')
  //     .then( data => 
        
  //       this.setState({
  //           reviews: data
  //       }))
  //       console.log("data", this.state.reviews)

  // }
  setModalVisible = () => {
      this.setState(prevState => ({modalVisible: !prevState.modalVisible})
      )}

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
        // console.log("nested", nested)
    

    return (
      <View style={styles.container}>


        <View >
            <View>
              <Text style={styles.h1}>{results[0].dba}</Text>
              <Text style={styles.grade}>{results[0].grade}</Text>
              <Text style={styles.h3}>{`${results[0].building} ${results[0].street} ${results[0].boro} ${results[0].zipcode}`}</Text>
            </View >
            <View style={styles.rating}>
            {this.state.reviewAverage ? <Text> User Rating Average: {this.state.reviewAverage}</Text> : <Text>Be the first to review this location!</Text>}
            
            <AvgStarRating />
            </View>
          </View >
          <View style={styles.reviewBtn}>
            <Link 
                style={{ textDecoration: 'none' }}
                to={{   
                    pathname:`${results[0].camis}/review`,
                    state: { results: results }
                }} >
                <Text > Start Review </Text>
                </Link>
            </View>
              
        
        
      </View>
    );
  }
}

export default withRouter(ShowLocation); 


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        backgroundColor: '#F5FCFF', 
        padding: 10, 
        marginTop: 22, 
        width: '100%', 

    },
    reviewBtn: {
        borderColor: 'black', 
        backgroundColor: '#F5FCFF', 
        padding: 10, 
        height: 'auto', 
        width: 'auto', 
        borderWidth: 1,
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
        flex: 1,
        justifyContent: 'flex-start', 
        fontSize: 25, 
        color: "black", 
        fontWeight: "bold", 
        padding: 5, 
        alignSelf: 'center'
      },
    h3: {
        fontSize: 15, 
        textAlign: 'center',
    }, 
    rating: {
        margin: 20, 
        padding: 20,
        flex: 1, 
        justifyContent: 'flex-start', 

    }
}); 