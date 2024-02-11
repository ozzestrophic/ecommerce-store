import { useState, createContext } from "react";
import Body from "./pages/Body";
import Nav from "./pages/Nav";

export const cartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart }}>
      <Nav />
      <Body />
    </cartContext.Provider>
  );
}

export default App;
