import React from 'react';
import { Route  } from 'react-router-dom';

import Register from '../containers/Auth/Register/Register';
import AboutUs from '../components/Static/AboutUs/AboutUs';
import GuestHome from '../containers/GuestHome/GuestHome';
import Login from '../containers/Auth/Login/Login';
import Huts from '../containers/Huts/Huts';
import Aux from '../hoc/Auxil';
import Contacts from '../components/Static/Contacts/Contacts';

const layout = (props) => {
    return (
        <Aux>
            <Route path="/" exact component={GuestHome} />
            <Route path='/aboutUs'  component={AboutUs}/>
            <Route path='/contacts'  component={Contacts}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/huts/rila' component={Huts}/>
        </Aux>
    )
}

export default layout;