import React, { Component } from 'react';

class Signin extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <form onSubmit={() => { }}>
                    <h2>Sign In</h2>
                    <label htmlFor="email">Email </label>
                    <input type="email" id="email" onChange={() => { }} />
                    <br />
                    <br />
                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" onChange={() => { }} />
                    <br />
                    <br />
                    <button>Sign In</button>
                </form>
            </div>
        );
    }
}

export default Signin;
