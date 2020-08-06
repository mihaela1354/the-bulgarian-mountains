import React from 'react';

import WithClass from '../../hoc/WithClass';
import styles from './image.module.css';

const image = (props) => {
    return (
        <WithClass style={styles} class="image-holder">
            <img
                src={require(`./images/${props.imageUrl}`)}
                alt="Error" />
        </WithClass>
    )
}

export default image;