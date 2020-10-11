import React, {Component} from 'react';
import '../scss/operation.scss'
import Binario from "./Binario";
import Altro from "./Altro";
import Home from "./Home";






class Operation extends Component {
    render() {
        return (
                <div className='operation'>
                    <Home/>
                   <Binario/>
                   <Altro/>
                </div>
        );
    }
}

export default Operation;