import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'

import { Container, Content, Form, Item, Input, Label, Button, Grid, Col, Picker, DatePicker } from 'native-base';

class Tickets extends Component {

    static navigationOptions = {  
        
        title: 'Tickets', 

        headerStyle: {  
            backgroundColor:'royalblue' , 
            textAlign:"Center",

        },   
        headerTitleStyle: {  
            marginLeft:80,
            fontWeight: 'bold',  
            textAlign: 'center',
            color:"white",  

        },    
    };   
    
    render() {
        return (
           
         <ScrollView style={styles.container}>
               <Grid>
           <Col size={60}>
           <TouchableOpacity activeOpacity = { .5 } >
        <Image resizeMode="contain"  style={styles.ind}  source={require('../images/sd.png')} /> 
        </TouchableOpacity>

        </Col >
        <Col size={60}>
        <Image resizeMode="contain"  style={styles.branch}  source={require('../images/tm.png')} /> 
        </Col>
        </Grid>
       <Grid>
        <Col size={60}>
        <Image resizeMode="contain"  style={styles.book}  source={require('../images/as.png')} /> 
        </Col>

        <Col size={60}>
        <TouchableOpacity activeOpacity = { .5 } >
    
        <Image resizeMode="contain"  style={styles.graph}  source={require('../images/tmt.png')} /> 
        </TouchableOpacity>
        </Col>
        </Grid> 
        <Image resizeMode="contain"  style={styles.multy}  source={require('../images/am.png')} /> 

         </ScrollView>
       );

    }
}
export default Tickets;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white',
        
    },

    book: {
        width: 120,
        height: 120,
        marginStart:20,
        marginTop:10,
        flex:1      
    },

    multy: {
        width: 120,
        height: 120,
        marginStart:20,
        marginBottom:10,
        marginTop:30,
        flex:1       
    },
    ind: {
        width: 120,
        height: 120,
        marginStart:20,
        marginBottom:10,
        marginTop:20,
        flex:1
              
    },
    branch: {
        width: 120,
        height: 120,
        marginStart:20,
        marginBottom:10,
        marginTop:20,
        flex:1
    },
    graph: {
        width: 120,
        height: 120,
marginTop:30,
marginStart:20,
      
    },
})