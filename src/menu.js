import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Content, List, ListItem, Thumbnail, Icon, Left, Body } from 'native-base'
const Dash = () => {

    Actions.dashB()
};
const qr = () =>{
    Actions.qrs();
};
// const HealthNav = () =>{
  
//     Actions.health();
// };
const logout = () =>{
  
    Actions.login();
};
// const set = () =>{

  
//     Actions.setti();
// };
class Menu extends Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{flex:1,justifyContent:'center',alignItmems:'center'}}> 
            <Image
             style={{marginTop:15,flexShrink:1,height:130,width:120,alignSelf:"center"}}
            source={require('../images/service_kpo_logo.jpg')}
            
            /> 
        
              <Text style={{color:'#fff',fontSize:15,marginTop:-12}}>Profile</Text>
             </View>
                <View style={{ flex: 2 }}>
                    <Content>
                        <List>

                            <ListItem icon onPress={Dash}>
                                <Left>
                                    <Icon name="home" />
                                </Left>
                                <Body>
                                    <Text>
                                        Dashboard
                         </Text>
                                </Body>
                            </ListItem>
                            <ListItem icon >
                                <Left>
                                <Image
             style={{marginTop:15,flexShrink:1,height:25,width:25,marginTop:6}}
            source={require('../images/Api_page_-_QR-Code-Generator_com-1.jpg')}
            
            /> 
                                    {/* <Icon name="scanner" /> */}
                                </Left>
                                <Body>
                                    <Text onPress={qr}>
                                        Qr code
                         </Text>
                                </Body>
                            </ListItem>
                          


                           


                          


                            <ListItem icon onPress={logout}>
                                <Left>
                                    <Icon name="log-out" />
                                </Left>
                                <Body>
                                    <Text>
                                        Logout
                         </Text>
                                </Body>

                            </ListItem>

                        </List>
                    </Content>
                </View>
            </View>
        )


    }

}
export default Menu;
