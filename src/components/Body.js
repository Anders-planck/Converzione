import React, {Component} from 'react';
import '../scss/body.scss'
import '../scss/menu.scss'

import Nav from "../AddComponents/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../AddComponents/Home";
import Binario from "../AddComponents/Binario";
import Altro from "../AddComponents/Altro";


class Body extends Component {
    render() {
        return (
            <Router>
            <div className='body'>
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/binario' component={Binario}/>
                    <Route path='/Altro' component={Altro}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Body;