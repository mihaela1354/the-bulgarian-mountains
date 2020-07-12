import React from 'react';
import Card from './Card';

const cards = (props) => {
    return (
    <div className="card-container">
        {props.cards.map(c => <Card key={c.id} name={c.name} imageUrl={c.imageUrl} description={c.description} />)}
    </div>
    )
}

export default cards