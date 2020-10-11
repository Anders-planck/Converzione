import React from 'react';
import './App.scss';

import Body from "./components/Body";

import '../src/scss/menu.scss';
import Footer from "./components/Footer";

function App() {
    return (

            <div className="App">
                <div className="App-header">
                    <div className='title'>
                        <h1> Ben venuto su <span>Converzione</span></h1>
                    </div>
                    <Body/>
                <Footer/>
                </div>

            </div>

    );
}

export default App;
