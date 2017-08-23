//import * as loginActions from '../../actions/loginActions';

const initialState = {
    user: {
      name: null
    },
    fetching: false,
    authenticated: false,
    error: null
};
export const loginReducer = function (state = initialState, action) {
    switch(action.type){
        case 'AUTHENTICATE' :{
            return {...state,fetching:true};
        }
        case 'AUTHENTICATE_FULFILLED':{
            return {...state,fetching:false,authenticated:true,...action.payload};
        }
        case 'AUTHENTICATE_REJECTED':{
            return {...state,fetching:false,authenticated:false};
        }
        case 'REQUIRE_ERROR':{
            return {...state,...action.payload};
        }
        default: {
            return state;
        }
    }
};
export const logoutReducer = function (state = initialState, action) {
    switch(action.type){
        case 'LOGOUT' :{
            return {...state,fetching:true};
        }
        case 'LOGOUT_FULFILLED':{
            return {...state,fetching:false,authenticated:false};
        }
        case 'LOGOUT_REJECTED':{
            return {...state,fetching:false,authenticated:true};
        }
        default: {
            return state;
        }
    }
};