import React, {Component} from 'react';

import Auth from './Auth';
import Navbar from './Navbar/Navbar';
import styles from './header.module.css'

class Header extends Component{
    state = {
        isLogged: false,
        username: "Mihaela"
    }
    render(){
        return (
            <header style={styles}>
                <Auth logged={this.state.isLogged} username={this.state.username}/>
                <Navbar />
            </header>
        )
    }
}

export default Header;