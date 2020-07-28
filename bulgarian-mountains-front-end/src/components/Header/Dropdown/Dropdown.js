import React from 'react';
import style from './dropdown.module.css'


const dropdown = (props) => {

    return (
        <div style={style} className="Dropdown">
            <a className="Dropdown-dropbtn">{props.purpose}</a>
            <ul className="Dropdown-content">
                <li><a href="">Rila</a></li>
                <li><a href="">Pirin</a></li>
                <li><a href="">Stara Planina</a></li>
            </ul>
        </div>
    )
}

export default dropdown;