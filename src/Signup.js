import React, { Component } from 'react';
import App from './App';
import Axios from 'axios';

class Signup extends Component {

    constructor() {

        super();

        this.state = {
            username: "",
            password: "",
            cnf_password: "",
            error: ""
        }

    }

    handleUsername = (e) => {
        const username = e.target.value;
        this.setState({ username });
    }

    handlePassword = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }

    handleCnfP = (e) => {
        const cnf_password = e.target.value;
        this.setState({ cnf_password });
    }

    checkS = (e) => {
        e.preventDefault();
        this.setState({ error: "" });
        // Check if fields are empty
        if(this.state.username === "" || this.state.password === "" || this.state.cnf_password === "") {
            this.setState({
                error: "Invalid details"
            });
            return;
        }

        // Check if passwords match
        if(this.state.password === this.state.cnf_password) {
            // Continue
            const user = {
                username: this.state.username,
                password: this.state.password
            }
            Axios.post("https://backend-keidakira.herokuapp.com/signup", user)
            .then(res => {
                if(res.data.success === 1) {
                    alert("User created!");
                } else {
                    this.setState({
                        error: res.data.msg
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "An error occurred, try again!"
                });
                console.log(err);
            });
        } else {
            this.setState({
                error: "Passwords don't match"
            });
            return;
        }
    }

    render() { 
        return (
            <React.Fragment>
                <App active="signup"/>
                <form onSubmit = {this.checkS} className="content" style={{ height: "calc(100vh - 56px)", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div>
                        <input type="text" onChange = {this.handleUsername} placeholder="Username" />
                    </div>
                    <div>
                        <input type="password" onChange = {this.handlePassword} placeholder="Password" />
                    </div>
                    <div>
                        <input type="password" onChange = {this.handleCnfP} placeholder="Confirm Password" />
                    </div>
                    <p style={{textAlign: "left", width: "258px", fontSize: "12px", color: "red"}}>{this.state.error}</p>
                    <div style={{width: "258px"}}>
                        <button>Signup</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Signup;