import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './nav.css'

const navbar = () => {
    return (
        <nav>
            <div>
                <Dropdown purpose="Routes"/>
                <Dropdown purpose="Huts"/>
                <a href="">Contacts</a>
            </div>
        </nav>
    )
}

export default navbar;