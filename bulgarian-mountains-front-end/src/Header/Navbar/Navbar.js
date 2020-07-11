import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import style from './nav.module.css';

const navbar = () => {
    return (
        <nav style={style}>
            <div>
                <Dropdown purpose="Routes"/>
                <Dropdown purpose="Huts"/>
            </div>
        </nav>
    )
}

export default navbar;