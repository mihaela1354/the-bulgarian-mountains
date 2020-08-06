import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Auxil';


const layout = (props) => {
    return (
        <Aux>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
}


export default layout;