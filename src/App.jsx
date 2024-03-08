import { useState, createContext } from "react";
import Body from "./pages/Body";
import Nav from "./pages/Nav";
import { ThemeProvider } from "@/components/theme-provider";

export const cartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeCartItem: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  const removeCartItem = (itemToBeRemoved) => {
    const newCart = cartItems.filter(
      (cartItem) => itemToBeRemoved !== cartItem
    );
    setCartItems(newCart);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <cartContext.Provider value={{ cartItems, addToCart, removeCartItem }}>
        <Nav />
        <Body />
      </cartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
