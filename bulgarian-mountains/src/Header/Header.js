import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="auth">
                    <h1><a>BulHuts</a></h1>
                    <div>
                        <a href="">Login</a>
                        <a href="">Register</a>
                    </div>
                </div>
                <nav>
                    <div>
                        <div className="dropdown">
                            <a className="dropbtn">Routes</a>
                            <ul className="dropdown-content">
                                <li><a href="">Rila</a></li>
                                <li><a href="">Pirin</a></li>
                                <li><a href="">Stara Planina</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a className="dropbtn">Huts</a>
                            <ul className="dropdown-content">
                                <li><a href="">Rila</a></li>
                                <li><a href="">Pirin</a></li>
                                <li><a href="">Stara Planina</a></li>
                            </ul>
                        </div>
                        <a href="">Contacts</a>
                    </div>
                </nav>
            </header>)
    }
}

export default Header;