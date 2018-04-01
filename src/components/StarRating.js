
import React, { Component } from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import starValues from './starValues'; 

// need 5 stars 
// each star will be regular outline and touchable
// on touch, star and all preceding should turn yellow 
// each star will need a value of 1-5 
// value must be submitted with review form 
// on press, set state to an array of values based on star chosen 
// in function, map over array to display new selected stars 

export default class StarRating extends Component {
    constructor() {
        super(); 
        
    
    this.state = {
        blankStars: 5, 
        starRating: {starValues:0}, 

        }
    }


    renderStars = () => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                { this.state.starRating.map ( (rating, i) => {
                    const fas =  <FontAwesomeIcon icon="star" style={{color : "yellow", borderColor: 'black' }}/>; 
                    const far =  <FontAwesomeIcon icon={["far", "star"]}/>           
                    <TouchableHighlight>
                        <View>  {rating} </View>
                    </TouchableHighlight> 

                })
             }
             </View>
          );
    }
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableHighlight>
              <View>
              <FontAwesomeIcon icon={["far", "star"]}/>
              {/* <FontAwesomeIcon icon="star" style={{color : "yellow", borderColor: 'black' }}/> */}
                </View>
             </TouchableHighlight> 
             <TouchableHighlight>
              <View>
              <FontAwesomeIcon icon={["far", "star"]}/>
              {/* <FontAwesomeIcon icon="star" style={{color : "yellow", borderColor: 'black' }}/> */}
                </View>

             </TouchableHighlight> 
             <TouchableHighlight>
              <View>
              <FontAwesomeIcon icon={["far", "star"]}/>
              {/* <FontAwesomeIcon icon="star" style={{color : "yellow", borderColor: 'black' }}/> */}
                </View>

             </TouchableHighlight> 
             <TouchableHighlight>
              <View>
              <FontAwesomeIcon icon={["far", "star"]}/>
              {/* <FontAwesomeIcon icon="star" style={{color : "yellow", borderColor: 'black' }}/> */}
                </View>

             </TouchableHighlight> 
             <TouchableHighlight>
              <View>
              <FontAwesomeIcon icon={["far", "star"]}/>
              {/* <FontAwesomeIcon icon="star" style={{color : "yellow", borderColor: 'black' }}/> */}
                </View>

             </TouchableHighlight> 
      </View>
    )
  }
}