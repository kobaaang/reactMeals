import React, { useReducer } from 'react'
import CartContext from './cart-context'

//리듀서 함수 정의
const cartReducer =(state, action)=>{
  switch (action.type){
    case "ADD":
      return{
        items:state.items.concat(action.item),  
        totalAmount:state.items.totalAmount + action.item.price*action.item.amount,        
      }
  }
  return defaultCartState;
}

//리듀서 초기화 정의
const defaultCartState = {
  items:[],  
  totalAmount: 0, 
}

const CartProvider = (props) => {
  //useReducer호출(선언)
  const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)
  

  const addItemToCartHandler = (item)=>{
    dispatchCartAction({type:"ADD", item:item})
  };
  const removeItemFromCartHandler = (id)=>{
    dispatchCartAction({type:"REMOVE", id:id})
  };

  //업데이트 될 객체- 다이나믹하게 변하는 부분
  const cartContext = {
    items: cartState.items,  
    totalAmount: cartState.totalAmount, 
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
  }
  console.log(cartContext)  //업데이트 확인

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;