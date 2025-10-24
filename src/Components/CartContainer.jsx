import CartCard from "./CartCard";
// TO display all the products currently in the cart
export default function CartContainer({
   cart,handleRemoveFromCart , handleCartIncrease , handleCartDecrease, handleEmptyCart, cartTotal,}) 
    {
        

  return(
     <div>
      {/* To show the empty cart message if cart is empty  */}
      {cart.length === 0 ?(
        <div>
         <h3>Cart items: 0 </h3>
          <p>No items in cart </p > 
         </div>
      ) : (
        <>
         {/*  To display the total number of products in cart whicha are unique*/}
        <h3>Cart items: {cart.length} </h3> 

        {/* loops through each cart item and show it using CartCard */}
         {cart.map((item) =>(
          <CartCard
             key={item.id}
             {...item}
            handleRemoveFromCart={() => handleRemoveFromCart(item.id) }
            handleCartIncrease={() => handleCartIncrease(item.id) }
            handleCartDecrease={() => handleCartDecrease(item.id)}/>
        ))}

          <div className="CartCard" >
            {/* Buttom remove all items at once  */}
            <button className="RemoveButton" onClick={handleEmptyCart}> Empty Cart </button>
            {/* checkout button to just shows total amount.  */}
            <button  id="BuyButton" > Checkout: ${cartTotal.toFixed(2)}</button >
        </div>   </>
      )}
     </div>
     );









}