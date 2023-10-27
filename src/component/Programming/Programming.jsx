import React, { useEffect, useState } from 'react';
import './Programming.css';
import Users from '../Users/Users';
import Cart from '../Crat/Cart';

const Programming = () => {
    const [programmings, setProgrammings] = useState([]);
    const [cart, setCart]=useState([]);
    const [mark, setMark] = useState([]);
    useEffect(() => {
        fetch('programming.json')
            .then(res => res.json())
            .then(data => setProgrammings(data))
    }, [])
    // book book icon click Multiline Updet Updete
    const handleAddTocart= (programmings)=>{
        const newCart= [...cart, programmings];
        setCart(newCart)

    } 

    // Mark as read click Spent time Updete

    const handleSpentTime=(programmings)=>{
        const newMark= [...mark, programmings];
        setMark(newMark)
        // console.log(programmings);
        
    }
    

    return (
        <div className='programmings-container'>
            <div>
                {
                  programmings.map(programming=><Users
                   key={programming.id} programming={programming}
                   handleAddTocart={handleAddTocart}
                   handleSpentTime={handleSpentTime}

                  
                  ></Users>)
                }
            </div>
            <div className='programming-cart'>
                <Cart cart={cart} mark={mark}></Cart>
            </div>

        </div>
    );
};

export default Programming;