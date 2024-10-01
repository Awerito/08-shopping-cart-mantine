import { createContext, useState, useMemo } from "react";

export const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const itemCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart],
  );

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id,
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      return setCart(updatedCart);
    }

    return setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const removeOneFromCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id,
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      const existingProduct = updatedCart[existingProductIndex];

      if (existingProduct.quantity > 1) {
        updatedCart[existingProductIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingProductIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopCartContext.Provider
      value={{
        cart,
        itemCount,
        removeOneFromCart,
        removeFromCart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};
