import React from 'react';

const hut = (props) => {
    const style = {
        margin: "2em",
        padding: "1em",
        border: "solid 2px black"
    }

    const guest = ( <article style={style}>
        <h2>{props.hut.name}</h2>
        <span>{props.hut.grade}/10</span>
        <p>{props.hut.description}</p>
        <button href={"\huts" + props.hut.id}>Details</button>
    </article>);

    const admin = (
        <form>
            <fieldset>
                <label>Name:</label>
                <input></input>
            </fieldset>
            <button>Change</button>
        </form>
    )
    return props.isLogged ? admin : guest;
}

export default hut;