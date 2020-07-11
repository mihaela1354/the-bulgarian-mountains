import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import style from './nav.module.css';

const navbar = () => {
    return (
        <nav style={style}>
            <div>
                <Dropdown purpose="Routes"/>
                <Dropdown purpose="Huts"/>
                <a href="">Contacts</a>
            </div>
        </nav>
    )
}

export default navbar;