import React from 'react';
import styles from './section.module.css';
import Cards from '../Card/Cards';

const section = (props) => {
    return (
        <section style={styles}>
            <h3>{props.title}</h3>
            <Cards class={props.class} type={props.type} cards={props.cards} />
        </section>
    )
}

export default section;