import React from 'react';
import styles from './CartItem.module.scss'
const CartItem = (props) => {
    return (
        <div className={styles.itemCard}>
             <img src={props.item.url} alt={props.item.name}/>	
                <h2>
                    {props.item.name}
                </h2>
                <h2>
                     {props.item.quantity} Item
                </h2>
                <h3>
                     {props.item.price}$
                </h3>
          </div>
    );
};

export default CartItem;