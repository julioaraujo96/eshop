import React from 'react';
import CollectionItem from './CollectionItem/CollectionItem';
import styles from './Collection.module.scss';

const Collection = props =>(
    <div className={styles.Collection}>
        {props.data.map(item => (
            <CollectionItem
                key={item.name}
                name={item.name} 
                season={item.season} 
                price={item.price}
                url={item.url}
            />
        ))}
    </div>
);

export default Collection;