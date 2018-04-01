
import React, { Component } from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import starValues from './StarValues'; 

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
        starRating: 4, 

        }
    }

    handleRating = (num) => {
        this.setState({starRating: num})
    }
  
  render() {
    const far =  <FontAwesomeIcon icon="star" style={{color : "yellow", borderColor: 'black' }}/>; 
    const num = this.state.starRating; 
    const fas =  <FontAwesomeIcon icon={["far", "star"]}/>;        
    const StarValues = {
        0: [far, far, far, far, far],
        1: [far, fas, fas, fas, fas], 
        2: [far, far, fas, fas, fas], 
        3: [far, far, far, fas, fas], 
        4: [far, far, far, far, fas], 
        5: [far, far, far, far, far]
    }; 
    return (
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                { StarValues[num].map ( (rating, i) => {
                    return(
                    
                    <TouchableHighlight>
                        <Text 
                            key={ i + 1 } 
                            onPress={() => this.handleRating(i+1)}
                            
                            >  {rating} </Text>
                    </TouchableHighlight> 
                    )
                })
             }
             </View>

    )
  }
}
