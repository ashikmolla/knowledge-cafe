import React from 'react';
import './Cart.css'


 // book book icon click Multiline Updet Updete
const Cart = (props) => {
    const cart =props.cart;
    const mark =props.mark;
    // console.log(mark)
    
    let cartTitle = '';
    for(const product of cart){
        cartTitle = cartTitle + product.cartTitle
        

    }
     // Mark as read click Spent time Updete
     let time=0
     for(const marks of mark){
        time=time+marks.time
     }
   
    
   
    return (
        <div className='cart'>
            <h5>Spent time on read:{time} min</h5>
                <div className='cart-summary'>
                    <h6>BookMarked blogs:-{cart.length} </h6>
                {/* <h1 className='cartTitleClickAdd'>{cartTitle} </h1> */}
               <h1 className='cartTitleClickAdd'>{cartTitle} </h1>

                
                    
                </div>
        </div>
    );
};

export default Cart;