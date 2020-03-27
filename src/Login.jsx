import React from 'react';
import App from './App'
import { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }

    handleUsername = (e) => {
        const username = e.target.value;
        this.setState({ username });
    }

    handlePassword = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }

    checkS = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <App active="login"/>
                <form onSubmit = {this.checkS} className="content" style={{ height: "calc(100vh - 56px)", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div>
                        <input type="text" onChange = {this.handleUsername} placeholder="Username" />
                    </div>
                    <div>
                        <input type="password" onChange = {this.handlePassword} placeholder="Password" />
                    </div>
                    <div style={{width: "258px"}}>
                        <button>Login</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;