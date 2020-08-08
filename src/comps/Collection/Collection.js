import React from 'react';
import CollectionItem from './CollectionItem/CollectionItem';
import styles from './Collection.module.scss';

const Collection =()=>(
    <div className={styles.Collection}>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
    </div>
);

export default Collection;