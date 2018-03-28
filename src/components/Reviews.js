import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Reviews extends Component {
    render() {
        return (
            <View>
                {this.props.reviews.map((d,i) => {
                    return (
                        <View key={d.camis} style={styles.box}>
                            <Text>{d.review}</Text>
                            <Text>{d.rating}</Text> 
                            </View>
                    )
                })}


                </View>
        );
    }
}

export default Reviews;
const styles=StyleSheet.create({
    
    box: {
        margin: 10,
        flex: 1,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 30,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
        }
})