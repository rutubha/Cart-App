import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import React, {useState} from 'react'; 
import Footer from './Footer';
import {AddItem} from "./AddItem";
import TotalItem from "./TotalItem";

function App() {

  let productList = [
    {
      price: 9999,
      name: "RealMe 4 Pro",
      quantity: 0
    }, 
    {
      price: 8999,
      name: "Redmi 8A dual",
      quantity: 0
    }
  ]

  //product list
  if(localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify(productList));
  } else {
    productList = JSON.parse(localStorage.getItem('products'));
  }

  let totalPrice = 0;
  //total price
  if(localStorage.getItem('totalPrice') === null) {
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  } else {
    totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
  }
  
  let [productLists, setProductList] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(totalPrice);

   const increamentQuantity = (index) => {
      let newProductList = [...productLists];
      let newTotalAmount = totalAmount;
      newProductList[index].quantity++;
      newTotalAmount += newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
      localStorage.setItem('products', JSON.stringify(newProductList));
      localStorage.setItem('totalPrice', JSON.stringify(newTotalAmount));
  }

  const decreamentQuantity = (index) => {
    let newProductList = [...productLists];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    localStorage.setItem('products', JSON.stringify(newProductList));
    localStorage.setItem('totalPrice', JSON.stringify(newTotalAmount)); 
  }

  const reset = () => {
    let newProductList = [...productLists];
    newProductList.forEach((element) => {
        element.quantity = 0;
      });
      setProductList(newProductList);
      setTotalAmount(0);
      localStorage.setItem('products', JSON.stringify(newProductList));
      localStorage.setItem('totalPrice', JSON.stringify(0));
  }

  const addItem = (name, price) => {
    let newProductList = [...productLists];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    });
    setProductList(newProductList);
    localStorage.setItem('products', JSON.stringify(newProductList));
  }


  const removeItem = (index) => {
    let newProductList = [...productLists];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    localStorage.setItem('products', JSON.stringify(newProductList));
    localStorage.setItem('totalPrice', JSON.stringify(newTotalAmount));
  }


  return (
    <>
      <Navbar></Navbar>
      <main className='container mt-3'>
        <AddItem addItem={addItem}/>
        <TotalItem productList={productLists} />
        <ProductList 
          productList={productLists} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity}
          removeItem={removeItem}>
        </ProductList>
        <Footer totalAmount={totalAmount} reset={reset}/>
      </main>
    </>
  );
}

export default App;
