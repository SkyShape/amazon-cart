import React from 'react';
import './CartItems.css';
import CartItem from './CartItem';

const CartItems = ({items, setCartItems}) => {
    
    const changeItemQuantity = (e, index) => {
        const newItems = [...items];
        newItems[index].quantity = e.target.value;
        setCartItems(newItems);
    }

    const deleteItem = (indexToDelete) => {
        const newItems = items.filter((value, index)=>{
            return index !== indexToDelete;
        })

        setCartItems(newItems);
    }

    const cartItemsList= items.map((item, index)=>
        <CartItem index={index} key={index} item ={item} changeItemQuantity = {changeItemQuantity} deleteItem={deleteItem}/>
    )
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                {cartItemsList}              
            </div>
            
        </div>
    )
}

export default CartItems;
