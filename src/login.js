
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {validationService} from './validation/service';

import Icon from 'react-native-vector-icons/FontAwesome';


const signIn = () => {
  
    Actions.tik()
};
const signUphere = () => {
    Actions.register()
};


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
          passwordSignin: '',
          showUsernameErr: false,
          showPasswordErr: false,
          loading: false,
          inputs: {
            Username: {
                type: "Username",
                value: "",
                errorLabel: ""
            },
            passwordSignin: {
              type: 'passwordSignin',
              value: '',
              errorLabel: '',
            },
         
          },
        };
        this.onInputChange = validationService.onInputChange.bind(this);
        this.getFormValidation = validationService.getFormValidation.bind(this);
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      }
    
      changeValue() {
        this.setState({showUsernameErr: false});
        this.setState({showPasswordErr: false});
      }
    
      renderError(id) {
        const {inputs} = this.state;
        if (inputs[id].errorLabel) {
          return <Text style={styles.error}>{inputs[id].errorLabel}</Text>;
        }
        return null;
      }
    
  render() {
      return (
          
          <View style={styles.container}>
              <Image resizeMode="contain" style={styles.logo} source={require('../images/service_kpo_logo.jpg')} />
              
              <Text style={styles.text1}>ServiceKpo</Text>
             
              <Content>
                  <Form>
                  <Item stackedLabel last>
                            <Label>Username</Label>
                            <Input placeholder="Enter your Name" autoCapitalize='none' style={{ opacity: 0.6, fontSize: 16, paddingBottom: 1 }} onChangeText={value => {
                                this.onInputChange({ id: "Username", value });
                            }} onChange={(event) => this.changeValue(event)} />
                            {this.renderError("Username")}
                            {this.state.showUsernameErr ? <Username /> : null}             
                                       </Item>

                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input
                  placeholder="Enter your password"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  style={{opacity: 0.6, fontSize: 16, paddingBottom: 1}}
                  onChangeText={value => {
                    this.onInputChange({id: 'passwordSignin', value});
                  }}
                />
                {this.renderError('passwordSignin')}
                {this.state.showPasswordErr ? <Password /> : null}                   
                     </Item>

                      <Button full regular
                         style={{ marginTop: 30, marginLeft: 5, marginRight: 5,backgroundColor:'#000066' }} onPress={this.signIn.bind(this)}>
                            <Text style={{ color: 'white',alignSelf:"center",fontSize:20 }}>Sign-In</Text>
                        </Button>

                        <Text style={styles.text2}>New User? <Text onPress = { signUphere} style={styles.text3}>Sign Up Here</Text></Text>
                        <Text style={styles.text2}>or</Text>
                        <Grid>
                    
                        <Col size={60}>
                                
                                    <Image resizeMode="contain" style={styles.socialIconsGoogle} source={require('../images/gg.png')} />
                               
                            </Col>
                            <Col size={60}>
                               
                                    <Image resizeMode="contain" style={styles.socialIconsFacebook} source={require('../images/fb.png')} />
                             
                            </Col>
                            <Col size={60}>
                                
                                    <Image resizeMode="contain" style={styles.socialIcons} source={require('../images/tw.png')} />
                               
                            </Col>
                            
                            
                        </Grid>
                        <Text style={{textAlign:"center",paddingTop:20}}>(c)SunKPO Systems LLP, 2019 </Text>
                      
                  </Form>
              </Content>
          </View>
      );
  }
  signIn() {
    this.getFormValidation();
    this.setState({loading: true});
    if (
      this.state.inputs.Username.errorLabel === null &&
      this.state.inputs.passwordSignin.errorLabel === null
    ) {
        //
        Actions.tik()
    } else {
        this.setState({showUsernameErr: false});
        this.setState({showPasswordErr: false});
        this.setState({loading: false});
      }
    }
}

export default Login;
// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white'

  },
  input: {
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      color: '#fff'
  },
  buttonContainer: {
      backgroundColor: '#ff7f50',
      paddingVertical: 15
  },
  buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  logo: {
      width: 300,
      height: 100,
      marginTop: 10,
      marginLeft: 10
  },
  loginContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  text1: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center',
      marginBottom: 5,
      justifyContent: 'center'
  },
  text2: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 15

  },
  text3: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      color: '#000066'
  },
  socialIcons: {
      width: 30,
      height: 30,
      marginLeft:40,
  },
  socialIconsFacebook: {
      width: 30,
      height: 30,
     alignSelf:'center',
  },
  socialIconsGoogle: {
      width: 30,
      height: 30,
      marginLeft:30,
  },
  text4: {
      fontSize: 15,
      textAlign: 'right',
      marginTop: 5,
      marginBottom: 5,
      color: 'grey'
  },
  gridStyles:{
      margin: 15,
      marginTop:5, 
      backgroundColor: 'white', 
      borderRadius: 100
  },
    error: {
    position: 'absolute',
    bottom: -14,
    marginLeft: 10,
    alignItems: 'center',
    color: 'red',
    fontSize: 12,
  },
})
