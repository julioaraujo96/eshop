import React from 'react';
import styles from './Cart.module.scss';

const Cart = () => {
    return (
        <article className={styles.Cart}>
          <div className={styles.itemCard}>
                <h2>
                    Shoe Name
                </h2>
          </div>
        </article>
    );
};

export default Cart;