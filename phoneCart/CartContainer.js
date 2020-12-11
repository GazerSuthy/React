import React from 'react'
import CartItem from './Cartitem'
import {useChildrenContext} from './context'


const CartContainer = () => {
    // destructure the cartItem value in our context since we return an object in useChildrenContext
    const {totalPrice, cartItems, clearItems} = useChildrenContext();

    //cart empty display
    if(cartItems.length === 0){
        return(
            <div className="empty-cart-output"><h1>Empty Cart</h1></div>
        );
    }

    return (
        <div className="CartContainer">
            <div className="yourBAG"><h1 className="YOURBAG">YOUR BAG</h1></div>
            <div className="items">
                {cartItems.map(item => {
                //map each item to a cartItem
                return(<CartItem key={item.id} {...item}/>) // how do you pass prop without the ... syntax?
                })}
            </div>
            <div className="cart-info"><h3 className="TOTAL">Total:</h3><h3 className="TOTALPRICE"> ${totalPrice}</h3></div>
            <div className="clear-btn">
                <button className="clear" onClick={clearItems}>Clear items</button>
            </div>
        </div>
    )
}

export default CartContainer
