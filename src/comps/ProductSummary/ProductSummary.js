import React from 'react';
import styles from './ProductSummary.module.scss';


const ProductSummary = (currentSummary,setShowModal) =>{
    console.log(currentSummary);
    return(
        <article>
            <div className={styles.summaryHeader}>
                <h4>Men's Shoe</h4>
                <h4>{currentSummary.price} $</h4>
            </div>
            <div className={styles.shoeContainer}>
                <h1>{currentSummary.name}</h1>
                <img src={currentSummary.url} alt={currentSummary.name} />
            </div>
            <div className={styles.sizePicker}>
                <p>Select Size</p>
                <div className={styles.inputContainer}>
                    <input type="button" value="EU 37"/>
                    <input type="button" value="EU 40"/>
                    <input type="button" value="EU 43"/>
                </div>
            </div>
            <div className={styles.purchaseContainer}>
                <button className={styles.addCartButton}>Add to cart</button>
            </div>
        </article>
    )
}

export default ProductSummary;