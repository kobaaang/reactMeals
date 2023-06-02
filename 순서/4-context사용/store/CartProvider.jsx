import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
  const addItemToCartHandler = (item)=>{};
  const removeItemFromCartHandler = (id)=>{};

  //업데이트 될 객체- 다이나믹하게 변하는 부분
  const cartContext = {
    items:[],  
    totalAmount: 0, 
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
  }


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;