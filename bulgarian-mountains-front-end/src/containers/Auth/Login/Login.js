import React from 'react';
import styles from './login.module.css';

const login = (props) =>{
    return (
        <form style={styles}>
            <legend>Login</legend>
            <fieldset>
                <label for="login-username">Username:</label>
                <input type="text" placeholder="Peter" id="login-username"/>
            </fieldset>
            <fieldset>
                <label>Password:</label>
                <input tyle="password" placeholder="**************" id="login-pass"/>
            </fieldset>
            <button>Login</button>
        </form>
    )
}

export default login;