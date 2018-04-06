import React, { Component } from 'react';
import { View, TextInput, Button, TouchableHighlight, Text, StyleSheet, Image} from 'react-native';
import axios from 'axios'; 
import StarRating from './StarRating'; 
import { withRouter } from '../Routing'; 

class ReviewEditForm extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            review: '', 
            starRating: 0, 
            user: '', 
            error: ''
        }
     this.goBack = this.goBack.bind(this); 
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`/reviews/${params.id}`)
          .then(({ data: review }) => {      
            this.setState({ review: review, starRating: review.rating });
          });
      }
      async onSubmitEdit() {
        const { match: { params } } = this.props;

        this.setState({showProgress: true})
        console.log(  this.props.location.state.results.building, this.props.location.state.results.street);
        
        try {
            await axios.put(process.env.REACT_APP_HOST + `/reviews/${params.id}`, {
                user_id: 1, 
                camis: this.props.location.state.results.camis, 
                dba: this.props.location.state.results.dba, 
                bldg: this.props.location.state.results.bldg, 
                street: this.props.location.state.results.street, 
                boro: this.props.location.state.results.boro, 
                zip: this.props.location.state.results.zip, 
                rating: this.state.starRating, 
                review: this.state.review, 
                grade: this.props.location.state.results.grade, 
                category: this.props.location.state.results.category
                
            }).then(response => {
                this.goBack(); 
            })
            
            } catch(error) {
                this.setState({error: error});
                console.log("error " + error);
            }
        }
    
    goBack=()=>{        
        this.props.history.goBack();
    }

    // passed to StarRating comp to get rating value 
    getStarRating = (rating) => {
        this.setState({starRating: rating})
    }

    // sets the initial state of rating to pass to Star Rating component to render inital rating
    initialRating = () => {
        const { results } = this.props.location.state; 
        this.setState({starRating:results.rating })
    }

    async deleteReview() {
        this.setState({showProgress: true})
        try {
            await axios.delete(process.env.REACT_APP_HOST +`/reviews/${this.props.location.state.results.id}`)
                .then( (response) =>  {
                    this.props.history.goBack();
                    console.log(response);
                  })
                  .catch( (error) => {
                    console.log(error);
                  });
        } catch(error) {
            this.setState({error: error});
            console.log("error " + error);
        }
    }

    render = (props) => {
        // const { results } = this.props.location.state; 
        return (

        <View style={styles.container}>
            <Text style={styles.heading}>
                How would you rate your experience? 
            </Text>
            <StarRating starRating={this.state.starRating} getStarRating={this.getStarRating}/>
            <TextInput
              onChangeText={ (text)=> this.setState({review: text}) }
              style={styles.input} 
              placeholder={this.state.review.review}
              multiline={true}
              numberOfLines={4}
              autoFocus={true}
              autoCapitalize='none'>
            </TextInput>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, width: '40%'}} >
                    <Button onPress={this.goBack} title="Go Back"/>
                    <TouchableHighlight onPress={() => this.deleteReview()} > 
                        <Image 
                        source={require('../images/noun_3058_cc.png')}
                        style={{height: 40, width: 40 }} />
                        </TouchableHighlight>
                    <Button
                        onPress={this.onSubmitEdit.bind(this)}  style={styles.button}
                        title="Submit" />
                </View>
            

            </View>
        );
    }
}

export default withRouter(ReviewEditForm);

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