import React, { Component } from 'react';
import styles from './huts.module.css';

import CardSection from '../../components/Sections/CardSection';
import InfoSection from '../../components/Sections/InfoSection';
import WithClass from '../../hoc/WithClass'


class Huts extends Component {
    render() {
        return (
            <WithClass style={styles} class="sections">
                <InfoSection title="Rila" info="Rila is the best" />
                <CardSection title="Huts" type="honored" cards={[]}/>
            </WithClass>
        )
    }
}

export default Huts;