import React from 'react';
import Card from './Card';
import WithClass from '../../hoc/WithClass';

const cards = (props) => {
    const inheritedClass = props.class? ` ${props.class}` : "";
    return (
        <WithClass class={"card-container" + inheritedClass}>
            {props.cards.map(c => <Card key={c._id} type={props.type} {...c} />)}
        </WithClass>
    )
}

export default cards