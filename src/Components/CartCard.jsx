import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  productName,
   brand,
  image ,
  priceNumber,
  quantity,
   handleRemoveFromCart,
  handleCartIncrease,
  handleCartDecrease,
}){
   return(
     <div className="CartCard">
       <img src={image} alt="" />
    <div className="CartCardInfo">
         <h4>{productName}</h4>
         <p>{brand}</p>
    <p>${priceNumber.toFixed(2)}</p>

 {/* Quantity controls inside the cart */}
    <QuantityCounter
         value={quantity}
          onIncrease={handleCartIncrease}
         onDecrease={handleCartDecrease}
          min={1}
        />
        {/* total price for this item */}
    <p>Total: ${(priceNumber * quantity).toFixed(2)}</p>

    {/*  button to remove the item from cart */}
        <div className="CartListBtns">
          <button className="RemoveButton" onClick={handleRemoveFromCart}>
         Remove
       </button></div></div></div>
       );
  }