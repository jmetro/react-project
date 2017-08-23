import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {loginUser} from '../../actions/loginActions';
import './login.css';

function mapStateToProps(state) {
    return {
        user: state.loginReducer.user,
        authenticated: state.loginReducer.authenticated,
        error: state.loginReducer.error
    }
}

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }
    login() {
        const credentials = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.dispatch(loginUser(credentials));
    }
    inputChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        if (this.props.authenticated) {
            return (<Redirect to="/home"/>)
        }
        return (
            <form className="flex-center">
                <Card zDepth={5} className="login-container">
                    <CardTitle title="Login"/>
                    <CardText>
                        <TextField fullWidth={true}
                                   hintText="Username"
                                   floatingLabelText="Username"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.inputChangeHandler}
                                   errorText={this.props.error ? this.props.error.usernameError : null}
                        />
                        <br/>
                        <TextField fullWidth={true}
                                   hintText="Password"
                                   floatingLabelText="Password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.inputChangeHandler}
                                   errorText={this.props.error ? this.props.error.passwordError : null}
                        />
                    </CardText>
                    <CardActions className="float-right clearfix">
                        <RaisedButton label="Register" primary={true}/>
                        <RaisedButton label="Login" onClick={this.login}/>
                    </CardActions>
                </Card>
            </form>
        );
    }
}

export default connect(mapStateToProps)(Login);