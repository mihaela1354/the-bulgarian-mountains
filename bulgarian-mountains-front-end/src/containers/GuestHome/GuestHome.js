import React, { Component } from 'react';
//import database from '../../database';
import Section from '../../components/Section/Section';
import styles from './cockpit.module.css';


class Cockpit extends Component {
    state = { 
        honored:[]
    }

    
    render() {
        const honoredContent = this.state.honored.length===0 
        ? {info: "No honored mentions!"} 
        : {cards: this.state.honored};

        return (
            <div style={styles} className="sections">
                <Section title="Wall of Honor" {...honoredContent} />
                <Section title="Safety rules" info="Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui." />
            </div>
        )
    }
}

export default Cockpit;