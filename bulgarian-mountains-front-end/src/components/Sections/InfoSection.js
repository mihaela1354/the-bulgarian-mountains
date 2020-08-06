import React from 'react';
import styles from './section.module.css';

const section = (props) => {
    return (
        <section style={styles}>
            <h3>{props.title}</h3>
            <article>{props.info ? props.info : props.children}</article>
        </section>
    )
}

export default section;