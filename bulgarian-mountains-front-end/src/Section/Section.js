import React from 'react';
import styles from './section.module.css';
import Card from '../Card/Card';

const section = (props) => {
    return (
        <section style={styles}>
            <h3>{props.title}</h3>
            {
                props.cards
                    ? (<div className="card-container">
                        {props.cards.map(c => <Card key={c.id} name={c.name} imageUrl={c.imageUrl} description={c.description} />)}
                    </div>)
                    : (<article>{props.info}</article>)
            }
        </section>
    )
}

export default section;