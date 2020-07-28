import React, {Component} from 'react';
import Auth from '../../components/Header/Auth';
import Navbar from '../../components/Header/Navbar/Navbar';
import styles from './header.module.css'

class Header extends Component{
    state = {
        isLogged: true,
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