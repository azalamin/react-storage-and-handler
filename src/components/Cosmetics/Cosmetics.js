import React, { useEffect, useState } from 'react';
import { addNumber } from '../../utilities/calculator';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    
    useEffect(() => {
        
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))

    }, [])

    const total = addNumber(cosmetics);


    return (
        <div>
            <h1>Total: {total}</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;