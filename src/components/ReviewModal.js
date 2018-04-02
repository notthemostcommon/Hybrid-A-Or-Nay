import React, { Component } from 'react';
import {  View, Text, Modal, Button, StyleSheet} from 'react-native';
import ReviewForm from './ReviewForm'; 

export default class ReviewModal extends Component {
  render() {
    return (
      
       <Modal
        style={{borderColor: 'black',}}
        presentationStyle="formSheet"
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        style={styles.container}
       >
       

        <View style={styles.exit}>
            {this.props.modalVisible && 
            <Button
                onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible)}}
                title="Exit"
                />}
            </View>

            <ReviewForm results={this.props.results}/>
            
          
      

      {/* {this.state.startReview ? <ReviewForm data={this.props.data} startReview={this.startReview} /> : null }

      {this.state.reviews ? <Reviews reviews={this.state.reviews}/> : 
      this.state.startReview ? null :
      <View> 
        <Text>Be the First to Review {this.state.dba} </Text>
            <TouchableHighlight
                onPress={this.startReview}
                
                >
                <Text style={{color: 'blue'}}>Start One Now!</Text>
            </TouchableHighlight>
         </View>
            } */}

    </Modal>
   
    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F5FCFF', 
        padding: 10, 
        marginTop: 22, 
        width: '100%', 

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
        height: 'auto', 
        width: 'auto', 
         
       
    }, 
    h1: {
        fontSize: 19,
        fontWeight: 'bold',
      },
    h3: {
        fontSize: 15, 
    }, 
}); 