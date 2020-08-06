import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './auth.module.css';

const auth = (props) => {
    return (
        <div style={styles} className="auth">
            <h1><NavLink to="/" exact>BulHuts</NavLink></h1>
            {!props.logged ?
                <div>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
                : <div>
                    <NavLink to="/profile:id">Hello, Username</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
            }
        </div>
    )
}

export default auth;