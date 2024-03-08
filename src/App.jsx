import { useState, createContext } from "react";
import Body from "./pages/Body";
import Nav from "./pages/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const cartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeCartItem: () => {},
  clearCart: () => {},
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

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <cartContext.Provider
        value={{ cartItems, addToCart, removeCartItem, clearCart }}
      >
        <Nav />
        <Body />
        <Toaster />
      </cartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
