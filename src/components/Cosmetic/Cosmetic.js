import React from 'react';
import { deleteFromDb, fakeDb } from '../../utilities/fakeDb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    
    const addToCart = (id) => {
        fakeDb(id);
    }

    const deleteFromCart = (id) => {
        deleteFromDb(id)
    }
    
    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>Get this for ${price}</p>
            <p><small>it has an id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => deleteFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;