import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import LeftSideBar from '../comps/LeftSideBar/LeftSidebar';
import MainItem from '../comps/MainItem/MainItem';
import Collection from '../comps/Collection/Collection';
import CollectionSort from '../comps/CollectionSort/CollectionSort'
import RightSidebar from '../comps/RightSidebar/RightSidebar';
import Pagination from '../comps/Pagination/Pagination';
import ProductSummary from '../comps/ProductSummary/ProductSummary';
import Modal from '../comps/UI/Modal/Modal';
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
let collectionOutput = null;

const [currentSummary,setCurrentSummary] = useState();
const [showModal,setShowModal] = useState(false);

  const handleClick=(item) =>{
    setCurrentSummary(item);
    setShowModal(true) 
  }
console.log(currentSummary)
  if (collection.length > 0) {
    const mainShoe = collection.filter(c => c.mainItem === true);
    const collectionData = collection.filter(c => c.mainItem === false);
    collectionData.forEach(item=>{item.handleClick={handleClick}})
    mainItem =(
      <MainItem 
        name={mainShoe[0].name} 
        season={mainShoe[0].season} 
        price={mainShoe[0].price}
        url={mainShoe[0].url}
        clicked={handleClick}
      />
    );
    collectionOutput =(<Collection data={collectionData}/>);
  }
  
  return(
    <div className={styles.App}>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Welcome to eShoes!</title>
          </Helmet>
         <Modal showModal={showModal} setShowModal={setShowModal}>
            <ProductSummary {...currentSummary} setShowModal={setShowModal}/>
         </Modal> 
      <LeftSideBar/>
      {mainItem}
      <div>
        {collectionOutput}
        <div className={styles.flexComp}>
          <Pagination/>
          <CollectionSort/>
        </div>
      </div>
      <RightSidebar/>
    </div>
)};

export default App;
