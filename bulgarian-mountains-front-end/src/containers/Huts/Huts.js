import React, { Component } from 'react';
import Aux from '../../hoc/Auxil';

import Section from '../../components/Section/Section';

class Huts extends Component {
    render() {
        return (
            <Aux>
                <Section title="Rila" info="Rila is the best" />
                <Section title="Huts" cards={[]}/>
            </Aux>
        )
    }
}

export default Huts;