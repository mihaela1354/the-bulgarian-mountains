import React from 'react';
import Auth from './Auth';
import Navbar from './Navbar/Navbar';
import styles from './header.module.css'

const header = () => {
    return (
        <header style={styles}>
            <Auth />
            <Navbar />
        </header>
    )
}

export default header;