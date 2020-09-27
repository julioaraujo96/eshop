import React from 'react';
import styles from './ProductSummary.module.scss';


const ProductSummary = (currentSummary,setShowModal) =>{
    console.log(currentSummary);
    return(
        <article>
            <div>
                <h3>Men's Shoe</h3>
                <h3>{currentSummary.price}</h3>
            </div>
            <div>
                <img src={currentSummary.url} alt={currentSummary.name} />
            </div>
            <div>
                <p>Select Size</p>
            </div>
            <div>
                <button>Add to cart</button>
                <button>Checkout</button>
            </div>
        </article>
    )
}

export default ProductSummary;