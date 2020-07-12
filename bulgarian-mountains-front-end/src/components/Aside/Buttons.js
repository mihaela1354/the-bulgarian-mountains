import React from 'react';

const buttons = (props)=>{
    const types = props.logged ? ["News", "Forum"] : [ "Contacts", "About Us"];

    return types.map(type=> <a href="">{type}</a>);
}

export default buttons;