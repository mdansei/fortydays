import React from "react";
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Training from "./Pages/Training";
import Profile from "./Pages/Profile";
import Handoff from "./Pages/Handoff";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
 import Home from "./Pages/Home";
const Main = () => (
  <main>
     <Switch>
       <div className="content">
         <div className="leftBox">
           <img alt="Forty Dayes Logo" src="" />
           <ul>  
             <li title=""><NavLink to="/home">Home</NavLink></li>
             <li title=""><NavLink to="/training">Training</NavLink></li>
             <li title=""><NavLink to="/profile">Profile</NavLink></li>
             <li title=""><NavLink to="/handoff">Hand Off</NavLink></li>
             <li title=""><NavLink to="/signin">Sign In</NavLink></li>
             <li title=""><NavLink to="/singup">Sign Up</NavLink></li>
           </ul>
           <div className = "footer ">
             <a href="" title="Email"> <img src="" /></a>
             <a href="" title="Instagram"> <img src="" /></a>
             <a href="" title="Linkedin"> <img src="" /></a>
           </div>
         </div>
         
           <div className ="rightBox">
             <Route exact path ="/home" component={Home}/>
             <Route path="/training" component={Training}/>
             <Route path="/profile" component={Profile}/>
             <Route path="/handoff" component={Handoff}/>
             <Route path="/signin" component={SignIn}/>
             <Route path="/singup" component={SignUp}/>
           </div>  
       </div>
     </Switch>
  </main>
);

 
export default Main;