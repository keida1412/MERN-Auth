import React from 'react';
import App from './App'
import { Component } from 'react';
import Axios from 'axios';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            error: ""
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
        document.getElementById('login_btn').style.cursor = 'not-allowed';
        e.preventDefault();
        this.setState({ error: "" });
        const user  = {
            username: this.state.username,
            password: this.state.password
        }
        if(user.username === "" || user.password === "") {
            this.setState({ error: "Invalid Details" });
            document.getElementById('login_btn').style.cursor = 'pointer';
            return;
        }
        Axios.post("http://localhost:5000/login/", user)
        .then(res => {
            if(res.data === true) {
                document.getElementById('login_btn').style.cursor = 'pointer';
                alert("Successful login");
            }   
            else {
                this.setState({ error: "Invalid credentials" });
            }
        })
        .catch(err => {
            this.setState({ error: "An error occurred!" });
            console.log(err);
            document.getElementById('login_btn').style.cursor = 'pointer';
        });
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
                        <small style={{color: "red", fontSize: "12px"}}>{this.state.error}</small><br />
                        <button id='login_btn'>Login</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;