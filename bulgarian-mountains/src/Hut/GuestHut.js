import React from 'react';

const guestHut = (props) => {
    const style = {
        margin: "2em",
        padding: "1em",
        border: "solid 2px black"
    }
    return (
        <article style={style}>
            <h2>{props.hut.name}</h2>
            <span>{props.hut.grade}/10</span>
            <p>{props.hut.description}</p>
            <button onClick={props.click}>Details</button>
        </article>
    );
}

export default guestHut;