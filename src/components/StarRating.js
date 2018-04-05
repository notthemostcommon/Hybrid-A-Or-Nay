
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import filledStar from '../images/airbnb-star-selected.png'; 
import blankStar from '../images/airbnb-star.png'
// need 5 stars 
// each star will be regular outline and touchable
// on touch, star and all preceding should turn yellow 
// each star will need a value of 1-5 
// value must be submitted with review form 
// on press, set state to an array of values based on star chosen 
// in function, map over array to display new selected stars 

const StarRating = (props)  => {
    
  
    const fas =  <Image source={require('../images/airbnb-star.png')} style={{width: 60, height: 60, marginTop: 30, marginBottom: 30}} />;        
    const num = props.starRating; 
    const far =   <Image source={require('../images/airbnb-star-selected.png')} style={{ width: 60, height: 60, marginTop: 30, marginBottom: 30}}/>;
    const StarValues = {
        0: [fas, fas, fas, fas, fas],
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
                    
                    <TouchableOpacity
                        key={ i + 1 } 
                        onPress={() => props.getStarRating(i+1)}>
                       
                            {rating} 
                    </TouchableOpacity> 
                    )
                })
             }
             </View>

    )
  }

  export default StarRating; 