import React from 'react';
import styles from './aside.module.css';

const aside = (props)=>{
    return (
        <aside style = {styles}>
            <a href="">News</a>
            <a href="">Forum</a>
            <a href="">Contacts</a>
        </aside>
    )
}

export default aside;