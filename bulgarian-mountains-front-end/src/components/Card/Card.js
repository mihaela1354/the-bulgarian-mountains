import React from 'react';
import style from './card.module.css';
import PropTypes from 'prop-types';

const card = (props) => {
    return (
        <article className="card" style={style}>
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

card.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string
}

export default card;