import {Redirect} from 'react-router-dom';

import React, { Component } from 'react';

export default class Authenticate extends Component {
    render(){
        if(this.props.location.pathname === '/'){
            return <Redirect to='/login' />;
        }
        return false;
    }
}