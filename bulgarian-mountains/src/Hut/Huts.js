import React from 'react';
import AdminHut from './AdminHut';
import GuestHut from './GuestHut';

const huts = (props) => {
    const style = {
        border: "solid 2px grey"
    }

    const deleteHut = (event) => {
        return event.target.parentNode.style.display = "none";
    }

    const huts = props.isLogged
        ? props.huts.map(hut => (<AdminHut click={deleteHut} kay={hut.id} hut={hut} />))
        : props.huts.map(hut => (<GuestHut click={deleteHut} kay={hut.id} hut={hut} />));

    return (<section style={style}> {huts} </section>);
}

export default huts;