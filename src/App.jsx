import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";

// Author: Gaurav
// Project-1 => Grocery App
// The project displays a single page grocery list where user can add or remove items to a shopping cart and get total amount at checkout.

export default function App(){
  return (
    <>
    {/* Rendering GroceriesAppContainer which contains both Products and Cart sections */}
      <GroceriesAppContainer />

    </>
  );
}