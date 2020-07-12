import React from 'react';
import styles from './section.module.css';
import Cards from '../Card/Cards';

const section = (props) => {
    return (
        <section style={styles}>
            <h3>{props.title}</h3>
            {
                props.cards
                    ? <Cards cards={props.cards}/>
                    : (<article>{props.info}</article>)
            }
        </section>
    )
}

export default section;