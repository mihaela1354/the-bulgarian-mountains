import React from 'react';

const hut = (props) => {
    return (
       <article>
           <h2>{props.hut.name}</h2>
           <span>{props.hut.grade}/10</span>
           <p>{props.hut.description}</p>
           <button>Details</button>
       </article>
    )
}

export default hut;