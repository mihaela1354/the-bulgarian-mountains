import React from 'react';


const dropdown = (props) => {

    return (
        <div className="Dropdown">
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