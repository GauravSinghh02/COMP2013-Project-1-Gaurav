import { useState } from "react";
import productsData from "../data/products";
import NavBar from "./NavBar" ;
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer(){
  const  [cart, setCart]  =  useState([]);   // To keeps the track/store of what/which items are added in the cart by the user

  //  storing the quantity counter of each product starting with 0 quatity by default, and this is separate from cart so that user can pick quantity before adding
  const [productCounters,  setProductCounters] =  useState(
    productsData.map((p) => ({ id: p.id, quantity: 0 })));

  // converting price string to number for calc.
const priceToNumber = (priceStr) =>  Number(priceStr.replace("$", ""));  // using regex is better/safer here for incase some of the product's price is $1,000+

  // decreases quantity for product card but not below 0
   const handleProductDecrease = (id)=> {
    setProductCounters((prev) =>
     prev.map((p) =>
     p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 }: p ) );
 };
  // increases quantity for product by 1 whenever user clicks + button
const handleProductIncrease = (id) =>{
    setProductCounters((prev) =>
      prev.map((p) => p.id === id ? { ...p, quantity: p.quantity + 1 } : p  ));
  };

   // when user clicks Add to Cart for aa product
  const handleAddToCart=(id) =>{
    const productInfo =  productsData.find((p)=> p.id === id);
    const counter =  productCounters.find((p)=>  p.id === id)?.quantity ??  0;

    if (counter <= 0) {
     alert("Please select quantity greater than 0"); // adding alert if user clicks addd to cart without selecting any quantuty
    return;
     }

    
     // updating cart if product already exists, if it doesnot exist already then, adding as new product to cart
    setCart((prev)=>{
       const exists = prev.find((item) => item.id === id);
       if (exists) {
        return prev.map((item) =>item.id === id ? { ...item, quantity: item.quantity + counter } : item);
      } 
      else{
       return[ ...prev,
        {
           id: productInfo.id,
           productName: productInfo.productName,
            brand: productInfo.brand ,
           image: productInfo.image ,
           priceNumber: priceToNumber(productInfo.price),
           quantity: counter,
        },];
    }});

        // resetting the product quantity back to 0
     setProductCounters((prev) =>
      prev.map((p) => (p.id === id ? { ...p,  quantity: 0  } : p))
    );
  };
  
  // decrease quantity inside cart but keeping minimum >1
   const handleCartDecrease =(id) => {
    setCart((prev)=>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item,  quantity: item.quantity - 1 } : item) );
    };


    // To remove an item/product FROM the Cart
   const handleRemoveFromCart=(id)  =>{
    
     setCart((prev)=>  prev.filter((item)=>  item.id !== id));

  };

    // increase quantity for the product INSIDE the Cart
  const handleCartIncrease= (id)=> {
    setCart((prev) =>
        prev.map((item)=>  item.id === id ?  { ...item,  quantity: item.quantity + 1 } : item) );
   };

// clearinig/emptying the cart
 const handleEmptyCart = () => setCart([]);

// calculating the total price of all the items in the cart 
 const cartTotal = cart.reduce( (sum, item) => sum +  item.priceNumber *  item.quantity, 0 );  // .reduce learnt in last semester Web programming 1

  return (

     <div id="root">
      {/* nav bar */}
    <NavBar cartCount= {cart.length}  />

    <div className="GroceriesApp-Container">

          {/* all products list */}
        <ProductsContainer
          data={productsData}
          productCounters={productCounters}
          handleProductIncrease={handleProductIncrease}
          handleProductDecrease={handleProductDecrease}
          handleAddToCart={handleAddToCart}
        />
           {/* shopping cart */}
        <CartContainer 
           cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCartIncrease={handleCartIncrease}
          handleCartDecrease={handleCartDecrease}
          handleEmptyCart={handleEmptyCart}
          cartTotal={cartTotal}
        />
  </div>  </div> 
);









}