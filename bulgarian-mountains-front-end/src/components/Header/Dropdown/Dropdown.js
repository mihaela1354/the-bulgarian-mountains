import React from 'react';
import { Link } from 'react-router-dom';
import style from './dropdown.module.css';


const dropdown = (props) => {

    return (
        <div style={style} className="Dropdown">
            <a className="Dropdown-dropbtn">{props.purpose}</a>
            <ul className="Dropdown-content">
                <li><Link to={"/"+props.purpose+"/rila"}>Rila</Link></li>
                <li><Link to={"/"+props.purpose+"/pirin"}>Pirin</Link></li>
                <li><Link to={"/"+props.purpose+"/stara-planina"}>Stara Planina</Link></li>
            </ul>
        </div>
    )
}

export default dropdown;