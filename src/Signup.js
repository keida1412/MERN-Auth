import React, { Component } from 'react';
import App from './App';

class Signup extends Component {

    constructor() {

        super();

        this.state = {
            username: "",
            password: "",
            cnf_password: ""
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
        console.log("Form submitted");
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
                    <div style={{width: "258px"}}>
                        <button>Signup</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Signup;