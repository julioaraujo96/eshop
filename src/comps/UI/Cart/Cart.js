import React from 'react';
import CartItem from '../Cart/CartItem/CartItem';
import styles from './Cart.module.scss';

const Cart = (props) => {
    let cartItems = null;
    let checkoutButton =null;
    if(props.cart.length > 0){
         cartItems = (props.cart.map(item => (
            <CartItem key={item.id}item={item}/>
         )));

         checkoutButton = (<button type="button">Checkout</button>);
    }
    else{
        cartItems = (
        <div className={styles.cartContainer}>
            <p>There is no items included in the cart.</p>
        </div>
        );
        
        checkoutButton = (<button type="button" disabled>Checkout</button>);
    }
    return (
        <article className={styles.Cart} onClick={e => e.stopPropagation()}>
        {cartItems}
        {checkoutButton}
        </article>
    );
};

export default Cart;