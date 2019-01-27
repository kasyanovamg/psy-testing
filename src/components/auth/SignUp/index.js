import React, { Component } from 'react';

class Signup extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <form onSubmit={() => { }}>
                    <h2>Sign Up</h2>
                    <label htmlFor="email">Email </label>
                    <input type="email" id="email" onChange={() => { }} />
                    <br />
                    <br />
                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" onChange={() => { }} />
                    <br />
                    <br />
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;
