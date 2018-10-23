import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import List from './pages/List';
import Home from './pages/Home';
import Navi from './components/Navi';
import config from './config/config';

console.log(config.apiKey);

const App = () => {
    return (
        <div>
        <Navi />  
        <Route exact path="/home" component={Home} />
        <Route path="/list" component={List} />
        {/* <Route exact path="/" component={List}></Route> */}
        </div>
    )
  }

ReactDOM.render(App, document.getElementById('root'))
export default App