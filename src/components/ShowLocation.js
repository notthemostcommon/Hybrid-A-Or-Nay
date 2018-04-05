import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image, Animated, Easing, TouchableOpacity, Button, ImageBackground} from 'react-native';
import Header from './Header'; 
import Reviews from './Reviews'; 
import axios from 'axios'; 
import ReviewForm from './ReviewForm'; 
import { Link, withRouter } from '../Routing'; 
import AvgStarRating from './AvgStarRating'; 
import _ from 'underscore'; 
import ShowViolations from './ShowViolations';

class ShowLocation extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
        modalVisible: false,
        selected: false,
        reviews: '', 
        startReview: false, 
        reviewAverage: 0, 
        avgRating: '', 
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

      axios.get(`/reviews/location/${params.id}`)
      .then( data => {
          
        this.setState({
            reviews: data
        })
        this.average(this.state.reviews); 
        console.log("state.avg", this.state.avgRating);
        
    })
    

  }
  average = (data) => {
      let total = 0; 
    data.data.map(( review, i) => {
        console.log("this is review", review)
        
        total +=  review.rating 
        return total
      });
      let newTotal = Math.floor(total/data.data.length)
      isNaN(newTotal) ? 
        this.setState({avgRating: "0"}) :      
        this.setState({avgRating: newTotal}) 
  } 


  
  render() {
    const { results } = this.props.location.state; 
    // console.log("this is show router props" , results    );
    const { match: { params } } = this.props;
    const getLocation = results.filter( result  => {
           if (params.id == result.camis) {
           return result 
           }
        }); 
        const locationResults = _.sortBy(getLocation, "inspection_date")
    
    // console.log("this is location results", locationResults);
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
        <ImageBackground 
              source={require('../assets/Red_Tablecloth_gw7h60.png')}
              resizeMode="cover"
              style={{
                flex: 1, 
                height: null, 
                width: null, 
                }}>
            <View style={{marginTop: 10, marginLeft: 50, marginRight: 50,  padding: 20, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <View style={{ flex: 2 }}> 
                    
                    </View>
                    <View style={{ flex: 2 }}></View>
                <View style={{ flex: 1}}>
                <View style={styles.buttonStyle}>
                        <Link 
                            // style={{ textDecoration: 'none' }}
                            to={{   
                                pathname:`${results[0].dba}/violations`,
                                state: { title: nested }
                            }} >
                            <Text style={styles.textStyle}>Violations</Text>
                            
                            </Link>
                        </View>
                    </View>
                </View>
            </View>


      <View style={styles.container}>

        <View style={{flex: 1, flexDirection: 'row'}} >
            <View style={{flex: 1}} >
              <Text style={styles.h1}>{locationResults[0].dba}</Text>
              <Text style={locationResults[0].grade === "A" ? styles.gradeA : styles.grade }>{locationResults[0].grade}</Text>
              <Text style={styles.h3}>{`${locationResults[0].building} ${locationResults[0].street} ${locationResults[0].boro} ${results[0].zipcode}`}</Text>
              <View style={styles.rating}>
            
                {this.state.reviewAverage > 0 ? <Text> `User Rating Average: ${this.state.reviewAverage}`</Text> : <Text style={{textAlign: 'center', margin: 10}}>Be the first to review this location!</Text>}
                <Text style={{textAlign: 'center'}} >  {this.state.avgRating && <AvgStarRating avgRating={this.state.avgRating}/>} </Text>
                </View>
            </View >
            
            <Image 
                source={require('../images/MapView.png')}
                resizeMode='cover'
                style={{height: 300, width: 400, alignSelf: 'center', borderColor: 'black', borderWidth: 1, marginBottom: 20, flex: 1}} />
          </View >
         
          <View style={styles.buttonStyle}>
            <Link 
                // style={{ textDecoration: 'none' }}
                to={{   
                    pathname:`${results[0].camis}/review`,
                    state: { results: results }
                }} >
                <Text style={styles.textStyle}> Start A Review </Text>
                </Link>
                
            </View>
            <View>
                    {this.state.reviews ? 
                    this.state.reviews.data.map( (data, id) => {
                        console.log("this is mapped data", data);
                        return(
                        <View style={styles.list}>
                        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                            <TouchableOpacity onPress={this.editReview}>
                                <Link 
                                    // style={{ textDecoration: 'none' }}
                                    to={{   
                                        pathname:`/review/${data.id}/edit`,
                                        state: { results: data }
                                    }} >
                                    <Image 
                                        source={require('../images/if_new-24_103173.png')}
                                        style={{width: 20, height: 20}}
                                        />
                                    </Link>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.h3} > User {data.user_id} says: </Text>
                            <Text style={styles.h1} > {data.review} </Text>
                            <AvgStarRating avgRating={data.rating}/>
                        </View>
                        )
  
                    }) : 
                    <Text style={styles.h1}> There are currently no reviews </Text>
                }
                </View>
              
        
        
      </View>
      </ImageBackground>
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
        marginTop: 10, 
        width: '100%', 

    },
    textStyle: {
        fontSize:15,
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'none'

      },
    buttonStyle: {
    
            backgroundColor: '#2E9298',
            borderRadius: 10,
            padding: 10,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
          
      },
    
    gradeA: {
      flex: 1,
      justifyContent: 'flex-end', 
      fontSize: 25, 
      color: "green", 
      fontWeight: "bold", 
      padding: 5, 
      alignSelf: 'center'
    }, 
    grade: {
        flex: 1,
        justifyContent: 'flex-end', 
        fontSize: 25, 
        color: "yellow", 
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

    },
    list: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 15, 
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },     

}); 