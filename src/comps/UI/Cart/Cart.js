import React from 'react';
import CartItem from '../Cart/CartItem/CartItem';
import styles from './Cart.module.scss';

const Cart = (props) => {
    return (
        <article className={styles.Cart} onClick={e => e.stopPropagation()}>
          {props.cart.map(item => (
           <CartItem item={item}/>
        ))}
        <button type="button">Checkout</button>
        </article>
    );
};

export default Cart;