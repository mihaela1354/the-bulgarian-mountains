import React from 'react';
import { NavLink } from 'react-router-dom';

const buttons = (props)=>{
    const types = props.logged ? ["news", "forum"] : [ "contacts", "aboutUs"];
    const map = {
        news: 'news',
        forum: 'forum',
        contacts: 'contacts',
        aboutUs: 'About Us'
    }

    return types.map(type=> <NavLink key={type} to={"/"+type}>{map[type]}</NavLink>);
}

export default buttons;