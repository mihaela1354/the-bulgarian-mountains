import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import style from './nav.module.css';

const navbar = () => {
    return (
        <nav className="Navbar" style={style}>
            <div>
                <Dropdown purpose="routes"/>
                <Dropdown purpose="huts"/>
            </div>
        </nav>
    )
}

export default navbar;