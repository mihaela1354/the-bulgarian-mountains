import React from 'react';
import styles from './login.module.css';

const login = (props) =>{
    return (
        <form className="Login" style={styles}>
            <legend>Login</legend>
            <fieldset>
                <label htmlFor="login-username">Username:</label>
                <input type="text" placeholder="Peter" id="login-username"/>
            </fieldset>
            <fieldset>
                <label htmlFor="login-pass">Password:</label>
                <input type="password" placeholder="**************" id="login-pass"/>
            </fieldset>
            <button>Login</button>
        </form>
    )
}

export default login;