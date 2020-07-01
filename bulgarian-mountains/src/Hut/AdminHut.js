import React from 'react';

const adminHut = (props) => {
    const style = {
        margin: "2em",
        padding: "1em",
        border: "solid 2px black"
    }

    return (
        < form style={style} >
            <fieldset>
                <label>Name:</label>
                <input></input>
            </fieldset>
            <button onClick={props.click} >Change</button>
        </form >
    )

}

export default adminHut;