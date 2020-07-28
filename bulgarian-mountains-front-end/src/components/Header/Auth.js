import React from 'react';
import styles from './auth.module.css'

const auth = (props) => {
    return (
        <div style={styles} className="auth">
            <h1><a>BulHuts</a></h1>
            {!props.logged ?
                <div>
                    <a href="">Login</a>
                    <a href="">Register</a>
                </div>
                : <div>
                    <a href="">Hello, Username</a>
                    <a href="">Logout</a>
                </div>
            }
        </div>
    )
}

export default auth;