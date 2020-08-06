import React from 'react';
import styles from './aside.module.css';
import Buttons from './Buttons';

const aside = (props)=>{

    return (
        <aside className="Aside" style = {styles}>
          <Buttons logged = {props.isLogged}/>
        </aside>
    )
}

export default aside;