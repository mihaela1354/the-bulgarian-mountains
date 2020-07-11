import React from 'react';
import styles from './aside.module.css';

const aside = (props)=>{
    return (
        <aside style = {styles}>
            <a>News</a>
            <a>Forum</a>
        </aside>
    )
}

export default aside;