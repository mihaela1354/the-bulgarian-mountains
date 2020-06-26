import React from 'react';

const dropdown = (props) => {
    
    return (
        <div className="dropdown">
            <a className="dropbtn">{props.purpose}</a>
            <ul className="dropdown-content">
                <li><a href="">Rila</a></li>
                <li><a href="">Pirin</a></li>
                <li><a href="">Stara Planina</a></li>
            </ul>
        </div>
    )
}

export default dropdown;