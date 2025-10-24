import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

export default function NavBar({ cartCount }){
 return(

   <div className="NavBar">
    <div className="NavDiv NavUser">
     <p>Hello, Gaurav</p> </div>

   <div className="NavDiv NavTitle">
    <h2>Grocery App 🍎</h2>    </div>
     
   <div className="NavDiv NavCart">
    {/* showing full cart image if cart has minimum 1 product OR empty cart image if zero products are added in cart  */}
   <img src={cartCount > 0 ? cartFull : cartEmpty}/>   
   
   </div>   </div>
);

}