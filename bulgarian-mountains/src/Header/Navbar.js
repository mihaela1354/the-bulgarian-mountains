import React from 'react';
import Dropdown from './Dropdown';

const navbar = () => {
    return (
        <nav>
            <div>
                <Dropdown />
                <Dropdown />
                <a href="">Contacts</a>
            </div>
        </nav>
    )
}

export default navbar;