import {combineReducers} from 'redux';

import {loginReducer,logoutReducer} from './components/containers/login/loginReducer';

export default combineReducers({loginReducer,logoutReducer});