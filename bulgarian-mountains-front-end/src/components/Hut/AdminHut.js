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
                    <input
                        name="name"
                        onChange={props.change.call(this, props.hut.id)}
                        value={props.hut.name} />
                </fieldset>
                <fieldset>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        onChange={props.change.call(this, props.hut.id)}
                        defaultValue={props.hut.description}></textarea>
                </fieldset>
                <button onClick={props.logged}>Submit</button>
            </form >
    )
}


export default adminHut;