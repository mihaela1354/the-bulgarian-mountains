import React from 'react';

const dropdown = (props) => {

    const toggleHandler = ()=>{
        console.log(this)
    };

    return (
        <div className="dropdown">
            <a className="dropbtn">{props.purpose}</a>
            <ul className="dropdown-content">
                <li><a href="">Rila</a></li>
                <li><a href="">Pirin</a></li>
                <li><a href="">Stara Planina</a></li>
            </ul>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    )
}

export default dropdown;