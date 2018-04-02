import React, { Component } from 'react';
import { View, Picker, TextInput, Button, TouchableHighlight, Text, StyleSheet} from 'react-native';
import axios from 'axios'; 
import StarRating from './StarRating'; 
import { withRouter } from '../Routing'; 

class ReviewForm extends Component {
    constructor(){
        super(); 
    
    this.state = { 
        review: '', 
        rating: '', 
        user: '', 
        error: ''
     }
     this.goBack = this.goBack.bind(this); 
    }
    async onSubmitReview() {
    this.setState({showProgress: true})
    try {
        let response = await axios('/reviews', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: 1, 
                camis: this.props.data.camis, 
                dba: this.props.data.dba, 
                bldg: this.props.data.building, 
                street: this.props.data.street, 
                boro: this.props.data.boro, 
                zip: this.props.data.zip, 
                rating: this.state.rating, 
                review: this.state.review, 
                grade: this.props.data.grade, 
                categroy: this.props.data.category
            })
        });
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
            //Handle success
            this.setState({error: ''});
            this.props.startReview(); 
            

        } else {
            //Handle error
            let error = res;
            throw error;
        }
        } catch(error) {
            this.setState({error: error});
            console.log("error " + error);
        }
    }

    goBack=()=>{
        console.log("clicked");
        
        this.props.history.goBack();
    }



    render = (props) => {
        const { results } = this.props.location.state; 
        console.log("inside review form");
        
        return (

        <View style={styles.container}>
            <Button onPress={this.goBack} title="Go Back"/>
            <Text style={styles.heading}>
                How would you rate your experience? 
            </Text>
            <StarRating />
            <TextInput
              onChangeText={ (text)=> this.setState({review: text}) }
              style={styles.input} 
              placeholder={`Tell Us About Your Experience @ ${results[0].dba}`}
              multiline={true}
              numberOfLines={4}
              autoFocus={true}
              autoCapitalize='none'>
            </TextInput>
                
                
            <Button
                onPress={this.onSubmitReview.bind(this)}  style={styles.button}
                title="Submit" />
                

                </View>
        );
    }
}

export default withRouter(ReviewForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingTop: 80
    },
    input: {
        height: 100,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec', 
        width: '75%', 
    }, 
    heading: {
        fontSize: 30,
      },
    h1: {
    fontSize: 19,
    fontWeight: 'bold',
    },
    h3: {
        fontSize: 15, 
        padding: 5, 
        margin: 5, 
    }, 
    button: {
        margin: 50, 

    }, 
    
}); 