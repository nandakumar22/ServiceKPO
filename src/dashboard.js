import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'

import { Container, Content, Form, Item, Input, Label, Button, Grid, Col, Picker, DatePicker } from 'native-base';

class Dashboard extends Component {

    static navigationOptions = {  
        
        title: 'Dashboard',
        color:"white",  
        headerStyle: {  
            backgroundColor:'royalblue' , 
            textAlign:"Center",
            color:"white",  

           
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
            <Text style={{textAlign:"center"}}>Tickets</Text>

         </ScrollView>
       );

    }
}
export default Dashboard;


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