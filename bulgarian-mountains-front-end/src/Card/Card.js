import React from 'react';
import style from './card.module.css';

const card = (props) => {
    return (
        <article style={style}>
            <h4>{props.name}</h4>
            <p className="image-holder">
                <img
                    src={props.imageUrl}
                    alt="" />
            </p>

            <p>{props.description}</p>

        </article>
    )
}

export default card;