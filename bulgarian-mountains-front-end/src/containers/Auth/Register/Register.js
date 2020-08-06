import React from 'react';
import styles from './register.module.css';

const register = (props) =>{
    return (
        <form className="Register" style={styles.Register}>
            <legend>Register</legend>
            <fieldset>
                <label htmlFor="register-username">Username:</label>
                <input type="text" placeholder="Peter" id="register-username"/>
            </fieldset>
            <fieldset>
                <label htmlFor="register-pass">Password:</label>
                <input type="password" placeholder="**************" id="register-pass"/>
            </fieldset>
            <fieldset>
                <label htmlFor="register-re-pass">Repeat Password:</label>
                <input type="password" placeholder="**************" id="register-re-pass"/>
            </fieldset>
            <button>Register</button>
        </form>
    )
}

export default register;