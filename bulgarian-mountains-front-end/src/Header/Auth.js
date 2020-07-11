import React from 'react';
import styles from './auth.module.css'

const auth = () => {
    return (
        <div style={styles} className="auth">
            <h1><a>BulHuts</a></h1>
            <div>
                <a href="">Login</a>
                <a href="">Register</a>
            </div>
        </div>
    )
}

export default auth;