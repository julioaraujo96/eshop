import React from 'react';
import styles from './CollectionItem.module.scss';

const CollectionItem = props =>(
    <div className={styles.ItemContainer}>
        <div className={styles.priceCircle}>
            <h1>${props.price}</h1>
        </div>
        <div className={styles.imageContainer}> 
            <img src={props.url} alt={props.name}/>
        </div>
        <div className={styles.title}>{props.name}</div>
    </div>
);

export default CollectionItem;