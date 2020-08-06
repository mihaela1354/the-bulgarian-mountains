import React from 'react';
import style from './card.module.css';
import PropTypes from 'prop-types';
import Image from '../Image/Image';

const card = (props) => {

    const map = {
        honored: (
            <article className="card" style={style}>
                <h4>{props.name}</h4>
                <Image imageUrl={props.imageUrl}/>
                <p>{props.nationality}</p>
            </article>
        ),
        images: (
            <article className="image-card" style={style}>
                <Image imageUrl={props.imageUrl}/>
            </article>
        )
    }

    return map[props.type]
}

card.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string
}

export default card;