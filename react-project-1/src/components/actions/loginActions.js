export function loginUser(credentials){
    if(credentials && credentials.username && credentials.password){
        return {
            type: 'AUTHENTICATE_FULFILLED',
            payload: {
                user: {
                    name: "Joms"
                }
            }
        }
    }
    return {
        type: 'REQUIRE_ERROR',
        payload:{
            error:{
                usernameError: credentials.username ? null : 'Please enter a username',
                passwordError: credentials.password ? null: 'Please enter a password'
            }
        }
    }
}