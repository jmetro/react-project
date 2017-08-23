import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';

import Home from './components/containers/home/home.js';
import Login from './components/containers/login/login';
import Authenticate from './components/redirect/Authenticate';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Router>
                <div>
                    <Route path="/" component={Authenticate}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    {/*<Route path="/login" component={Login}/>
                    <PrivateRoute path="/protected" component={Protected}/>*/}
                </div>
            </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
