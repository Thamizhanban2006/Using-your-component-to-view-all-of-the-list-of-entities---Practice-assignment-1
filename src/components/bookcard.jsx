// write the book component code here
import React from 'react';
import '../App.css';
// import {id,name,image,genre,author} from './App.jsx';

const Bookcard = ({id,name,image,genre,author}) => {
    return (
        <div className='Container'>
            <img src={image}/>
            
            <p>{name}</p>
            <p>{genre}</p>
            <p>{author}</p>
        </div>
    );
}

export default Bookcard;
