//모달팝업 안에 들어갈 내용
import React from 'react'
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      <li>아이템1</li>
      <li>아이템2</li>
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>총금액</span>
          <span>$12.99</span>
        </div>
        <div className={classes.action}>
          <button className={classes['button-outline']} onClick={props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  )
}

export default Cart