import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import LeftSideBar from '../comps/LeftSideBar/LeftSidebar';
import MainItem from '../comps/MainItem/MainItem';
import Collection from '../comps/Collection/Collection';
import db from '../firebase';
import styles from './App.module.scss';


const App =()=>{
  const [collection,setCollection] = useState([]);
//useEffect is a piece of code that runs based on a condition (empty array, executes only once when it loads, with dependencie, executes once and when the variable inside the array changes)
useEffect(()=>{
  db.collection('shoes').onSnapshot(snapshot =>(
    setCollection(snapshot.docs.map(doc => doc.data()))
  ))
},[]);

let mainItem = null;
  if (collection.length > 0) {
    const mainShoe = collection.filter(c => c.mainItem === true);
    mainItem =(
      <MainItem 
        name={mainShoe[0].name} 
        season={mainShoe[0].season} 
        price={mainShoe[0].price}
        url={mainShoe[0].url}
      />
    );
  }
  return(
    <div className={styles.App}>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Welcome to eShoes!</title>
          </Helmet>
      <LeftSideBar/>
      {mainItem}
      <Collection/> 
    </div>
)};

export default App;
