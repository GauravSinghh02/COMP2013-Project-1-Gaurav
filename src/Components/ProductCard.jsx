import QuantityCounter from "./QuantityCounter";

// To show the single product card with image, price and add button
export default function ProductCard({
  id,
  productName,
  brand,
  image,
  price,
  quantityCounter,
  handleProductIncrease ,
  handleProductDecrease,
  handleAddToCart,
}) {

  return(

  <div className="ProductCard">
     <img src={image} alt=""/>
     <h3>{productName}  </h3>
     <p> {brand} </p>  {/*using <span> is better here as per my online learning but not covered in class yet */}

   <div className="counter-container" >
     <QuantityCounter
        value={quantityCounter.quantity}
         onIncrease={()=> handleProductIncrease(id)}
         onDecrease={() => handleProductDecrease(id)}
          min= {0 }/></div>

   <p>{price}</p>
      {/* button adding  item in the cart */}
      <button onClick= {()=> handleAddToCart(id)}>Add to Cart</button>

    </div >
 );




}