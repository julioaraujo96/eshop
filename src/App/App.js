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
import SideMenu from '../comps/SideMenu/SideMenu';



const App =()=>{

    const [collection,setCollection] = useState([]);
  //useEffect is a piece of code that runs based on a condition (empty array, executes only once when it loads, with dependencie, executes once and when the variable inside the array changes)
  useEffect(()=>{
    db.collection('shoes').onSnapshot(snapshot =>(
      setCollection(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
      )
      )}
  ,[])



let mainItem = null;
let collectionOutput = null;

const [currentSummary,setCurrentSummary] = useState();
const [cartSummary,setCartSummary] = useState([]);
const [showModal,setShowModal] = useState(false);
const [showMenu,setShowMenu] = useState(false);

  const handleClick=(item) =>{
    setCurrentSummary(item);
    setShowModal(true) 
  }

const handleCart =(item)=>{
  //if the array is empty, add the item to the state
  if (cartSummary.length === 0) {
    setCartSummary([item])
  }

//if o item.id !== cart[i].id, add item to cart
  
   if(cartSummary.length >= 0){
      let cart = [...cartSummary];
      let selectedItem = {...item};
    const itemIndex = cart.findIndex(c => c.id === selectedItem.id)
    if(itemIndex === -1){
      selectedItem.quantity = 1;
      cart.push(selectedItem)
      setCartSummary(cart);
    }
    else{
      cart[itemIndex].quantity++
      setCartSummary(cart)
    }
   }
}
console.log(cartSummary);

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
          <SideMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
         <Modal showModal={showModal} setShowModal={setShowModal}>
            <ProductSummary currentSummary={currentSummary} setShowModal={setShowModal} addTocart={handleCart}/>
         </Modal> 
      <LeftSideBar setShowMenu={setShowMenu}/>
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
