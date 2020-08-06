import React, { Component } from 'react';
import CardSection from '../../components/Sections/CardSection';
import InfoSection from '../../components/Sections/InfoSection';
import axios from 'axios';
import styles from './cockpit.module.css';


class Cockpit extends Component {
    state = {
        honored: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/honored/all')
            .then(res => {
                this.setState({ honored: res.data });
            })
            .catch(console.log)
    }

    render() {
        const honoredContent = this.state.honored.length === 0
            ? <InfoSection title="Wall of Honor">There are no honorable mentions yet</InfoSection>
            : <CardSection title="Wall of Honor" type="honored" cards={this.state.honored} />;

        return (
            <div style={styles} className="sections">
                {honoredContent}
                <InfoSection title="Safety rules">
                    Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.
                </InfoSection>
            </div>
        )
    }
}

export default Cockpit;