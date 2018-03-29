import React, { Component } from 'react';
import { View, Picker, TextInput, Button, TouchableHighlight, Text, StyleSheet} from 'react-native';
import axios from 'axios'; 

class ReviewForm extends Component {
    state = { 
        review: '', 
        rating: '', 
        user: '', 
        error: ''
     }
    async onLoginPressed() {
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


    render() {
        return (

        <View style={styles.container}>
            <Text style={styles.heading}>
                Tell Us About Your Experience @ {this.props.data.dba}
            </Text>
            <TextInput
              onChangeText={ (text)=> this.setState({review: text}) }
              style={styles.input} 
              placeholder="Review"
              multiline={true}
              numberOfLines={4}
              autoFocus={true}
              autoCapitalize='none'>
            </TextInput>
                <Text style={styles.h3} >Rating</Text>
                <Picker
                    style={{height: 50, width: 50, margin: 25}}
                    selectedValue={this.state.rating}
                    onValueChange={(itemValue, itemIndex) => this.setState({rating: itemValue})}
                    >
                    <Picker.Item label="5" value= "5" />
                    <Picker.Item label="4" value="4"  />
                    <Picker.Item label="3" value= "3" />
                    <Picker.Item label="2" value= "2" />
                    <Picker.Item label="1" value= "1" />
                                    
                    </Picker>
                
                {/* <Text>5 = Killing It! </Text>
                <Text>1 = Should Have Been Killed</Text> */}
            
            <Button
                onPress={this.onLoginPressed.bind(this)}  style={styles.button}
                title="Submit" />
                

                </View>
        );
    }
}

export default ReviewForm;

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