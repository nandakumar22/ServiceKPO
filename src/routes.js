import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './login'; 
import Menu from './menu';
import Register from './register';
import Dashboard from './dashboard';
import Tickets from './ticks';
import Qr from './qr'

import { Icon } from 'native-base';


    const MenuIcon = () => {

        return (
            <Icon name='menu' size={30}style={{activeTintColor:'white'}} />
        )
    }
const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="c" initial={true} component={Login} hideNavBar={true} />

           
            <Scene key="register" component={Register} hideNavBar={false} /> 
     

            <Scene key ="drawer" drawer contentComponent={Menu} drawerIcon={MenuIcon}  drawerWidt={250} hideNavBar>

            <Scene key ="tik" component={Tickets}/>

            <Scene key ="qrs" component={Qr}/>

<Scene key ="dashB" component={Dashboard}/>
            </Scene>


            </Scene>
    </Router>
)

export default Routes