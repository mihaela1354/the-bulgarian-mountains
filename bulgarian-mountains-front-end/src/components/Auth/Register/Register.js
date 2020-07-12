import React from 'react';
import styles from './register.module.css';

const register = (props) =>{
    return (
        <form style={styles}>
            <legend>REgister</legend>
            <fieldset>
                <label>Username:</label>
                <input type="text" placeholder="Peter" id="login-username"/>
            </fieldset>
            <fieldset>
                <label>Password:</label>
                <input tyle="password" placeholder="**************" id="login-pass"/>
            </fieldset>
            <fieldset>
                <label>Repeat Password:</label>
                <input tyle="password" placeholder="**************" id="login-pass"/>
            </fieldset>
            <button>Register</button>
        </form>
    )
}

export default register;