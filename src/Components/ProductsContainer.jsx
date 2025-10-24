import ProductCard from "./ProductCard";

export default function ProductsContainer({

   data, productCounters, handleProductIncrease ,handleProductDecrease,handleAddToCart, })  {

  return(
    <div className="ProductsContainer">

    {/* Looping through every product and createing a ProductCard for it */}
     {data.map((product)=> (
       <ProductCard
         key={product.id} {...product }
         quantityCounter={
            productCounters.find((p)=> p.id === product.id ) ?? { id: product.id , quantity: 0, }
    }
       
    handleProductIncrease={handleProductIncrease}
    handleProductDecrease={handleProductDecrease}
    handleAddToCart={handleAddToCart }

 />
      ))}

    </ div>
  );







}