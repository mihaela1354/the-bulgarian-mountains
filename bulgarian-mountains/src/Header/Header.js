import React, { Component } from 'react';
import Auth from './Auth';
import Navbar from './Navbar';

const header = () => {
    return (
        <header>
            <Auth />
            <Navbar />
        </header>
    )
}

export default header;