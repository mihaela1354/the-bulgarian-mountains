import React from 'react';
import Card from './Card';
import WithClass from '../../hoc/WithClass';

const cards = (props) => {
    return (
    <WithClass class="card-container">
        {props.cards.map(c => <Card key={c.id} name={c.name} imageUrl={c.imageUrl} description={c.description} />)}
    </WithClass>
    )
}

export default cards