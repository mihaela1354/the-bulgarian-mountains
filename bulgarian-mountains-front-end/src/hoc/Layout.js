import React from 'react';
import { Route } from 'react-router-dom';


import Login from '../containers/Auth/Login/Login';
import Register from '../containers/Auth/Register/Register';
import GuestHome from '../containers/GuestHome/GuestHome';

// import styles from '../containers/App.module.css';
// import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer'
// import Aside from '../components/Aside/Aside';
// import Cockpit from '../containers/GuestHome/GuestHome';
import Aux from '../hoc/Auxil';

const layout = (props) => {
    return (
        <Aux>
            <Route path="/"exact component={GuestHome} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Aux>
    )
}

export default layout;