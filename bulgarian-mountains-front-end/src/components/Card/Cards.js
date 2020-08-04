import React from 'react';
import Card from './CardHonored';
import WithClass from '../../hoc/WithClass';

const cards = (props) => {
    return (
    <WithClass class="card-container">
        {props.cards.map(c => <Card {...c} />)}
    </WithClass>
    )
}

export default cards