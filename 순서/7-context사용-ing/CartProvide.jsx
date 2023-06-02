import React, { useReducer } from 'react'
import CartContext from './cart-context'

const cartReducer = (state, action)=>{
  if(action.type=== "ADD"){
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount,      
    }
  }
  if(action.type=== "REMOVE"){}
  return defaultCartState
}

const defaultCartState = {
  items:[],
  totalAmount:0,
}

const CartProvide = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)

  const addItemToCartHandler = (item)=>{
    dispatchCartAction({ type:"ADD", item })
  };
  const removeItemFromCartHandler =(id)=>{
    dispatchCartAction({ type:"REMOVE", id})
  };
  
  //업데이트 될 객체-다이나믹하게 변할 부분
  const cartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
    
  )
}

export default CartProvide