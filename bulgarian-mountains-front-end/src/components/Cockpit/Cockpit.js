import React from 'react';
import Section from '../Section/Section';

const cockpit = (props) => {
    return (
    <div className="sections">
        <Section title="Safety rules" info="Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui." />
        <Section title="Wall of Honor" cards={props.state.honored} />
    </div>
    )
}

export default cockpit;