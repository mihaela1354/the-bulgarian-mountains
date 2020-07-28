import React from 'react';
import { Link } from 'react-router-dom';
import styles from './auth.module.css';

const auth = (props) => {
    return (
        <div style={styles} className="auth">
            <h1><Link to="/">BulHuts</Link></h1>
            {!props.logged ?
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                : <div>
                    <Link to="/profile:id">Hello, Username</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            }
        </div>
    )
}

export default auth;