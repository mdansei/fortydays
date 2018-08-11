import React from "react";
import {
    Route,
    NavLink,
    Switch
} from "react-router-dom";

import {classes} from '@material-ui/core/'

import Training from "./Pages/Training";
import Profile from "./Pages/Profile";
import Handoff from "./Pages/Handoff";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Drawer from './Drawer'


const Main = () => (
    <div>
        <Drawer>
            <div>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/training" component={Training}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/handoff" component={Handoff}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                </Switch>
            </div>
        </Drawer>
    </div>
);


export default Main;