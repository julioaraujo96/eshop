import React from 'react';
import styles from './CollectionItem.module.scss';

const CollectionItem = props =>(
    <div className={styles.ItemContainer}>
        <div className={styles.priceCircle}>
            <h1>${props.price}</h1>
        </div>
        <img src={props.url} alt={props.name}/>
        <h2>{props.name}</h2>
    </div>
);

export default CollectionItem;