import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartIntems = cartCtx.items.length;

  return (
    <button className={classes.button} onClick={props.onclick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartIntems}</span>
    </button>
  )
}

export default HeaderCartButton