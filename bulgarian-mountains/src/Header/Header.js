import React, { Component } from 'react';
import Auth from './Auth';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <header>
                <Auth />
                <Navbar />
            </header>
        )
    }
}

export default Header;