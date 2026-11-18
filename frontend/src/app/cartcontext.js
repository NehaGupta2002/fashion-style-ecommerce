

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add product (merge quantity if same product id & size exists)
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existingIndex = prev.findIndex(
//         (item) => item._id === product._id && item.size === product.size
//       );

//       if (existingIndex !== -1) {
//         // update quantity of existing product
//         const updatedCart = [...prev];
//         updatedCart[existingIndex].quantity += product.quantity;
//         return updatedCart;
//       } else {
//         // add new product
//         return [...prev, product];
//       }
//     });
//   };

//   // Remove product by id & size
//   const removeFromCart = (productId, size) => {
//     setCart((prev) =>
//       prev.filter((item) => !(item._id === productId && item.size === size))
//     );
//   };

//   // Calculate total price
//   const getTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, getTotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add product only if user is logged in
  const addToCart = (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login or register first to add items to your cart.");
      return;
    }

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item._id === product._id && item.size === product.size
      );

      if (existingIndex !== -1) {
        // Update quantity of existing product
        const updatedCart = [...prev];
        updatedCart[existingIndex].quantity += product.quantity;
        return updatedCart;
      } else {
        // Add new product
        return [...prev, product];
      }
    });
  };

  const removeFromCart = (productId, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item._id === productId && item.size === size))
    );
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotal,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

