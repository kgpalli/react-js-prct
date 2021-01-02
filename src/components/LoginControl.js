import React, { Component } from 'react'

 class LoginControl extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn = false
        }
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        })
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn:false
        })
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn
        return (
           <div>
               
           </div>
        )
    }
}

export default LoginControl


function LoginButton(props){
    return(
        <button onClick={props.onClick}> Login </button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}> Logout </button>
    )
    }