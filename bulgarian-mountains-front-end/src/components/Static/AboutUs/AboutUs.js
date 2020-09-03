import React from 'react';
import styles from './aboutUs.module.css';

import CardSection from '../../Sections/CardSection';
import InfoSection from '../../Sections/InfoSection';
import WithClass from '../../../hoc/WithClass';

const aboutUs = (props) => {

    const mock = [{_id: 1, imageUrl: "boqn.jpg"},{_id: 2, imageUrl: "boqn.jpg"},{_id: 3, imageUrl: "boqn.jpg"},{_id: 4, imageUrl: "boqn.jpg"},{_id: 5, imageUrl: "boqn.jpg"},{_id: 6, imageUrl: "boqn.jpg"}]
    return (
        (
            <WithClass style={styles} class="sections">
                <InfoSection title="Who are we?" >
                    Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui.
                </InfoSection>
                <CardSection class="Gallery" type="images" title="Gallery" cards={mock}/>
            </WithClass>
        )
    )
}

export default aboutUs;