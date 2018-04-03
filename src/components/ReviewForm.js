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
        user: '', 
        error: '', 
        starRating: 0, 
     }
     this.goBack = this.goBack.bind(this); 
    }

    getStarRating = (rating) => {
        this.setState({starRating: rating})
        console.log(this.state.starRating);
        
    }
    async onSubmitReview() {
    this.setState({showProgress: true})
    try {
        let response = await axios.post('http://localhost:8080/reviews', {
            user_id: 1, 
            camis: this.props.location.state.results[0].camis, 
            dba: this.props.location.state.results[0].dba, 
            bldg: this.props.location.state.results[0].building, 
            street: this.props.location.state.results[0].street, 
            boro: this.props.location.state.results[0].boro, 
            zip: this.props.location.state.results[0].zipcode, 
            rating: this.state.starRating, 
            review: this.state.review, 
            grade: this.props.location.state.results[0].grade, 
            category: this.props.location.state.results[0].cuisine_description
        });
                this.props.history.goBack();

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
            
            <Text style={styles.heading}>
                How would you rate your experience? 
            </Text>
            <StarRating starRating={this.state.starRating} getStarRating={this.getStarRating}/>
            <TextInput
              onChangeText={ (text)=> this.setState({review: text}) }
              style={styles.input} 
              placeholder={`Tell Us About Your Experience @ ${results[0].dba}`}
              multiline={true}
              numberOfLines={4}
              autoFocus={true}
              autoCapitalize='none'>
            </TextInput>
                
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, width: '40%'}}> 
            <Button onPress={this.goBack} title="Go Back"/>
            <Button
                onPress={this.onSubmitReview.bind(this)}  
                title="Submit" />
                </View>    
            
                

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
        height: 40, 
        width: 75, 

    }, 
    
}); 