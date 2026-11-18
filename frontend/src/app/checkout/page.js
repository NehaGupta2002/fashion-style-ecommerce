// "use client";

// import { useCart } from "../cartcontext"; // Adjust path as needed
// import { useRouter } from "next/navigation";

// const Checkout = () => {
//   const { cart, getTotal, clearCart } = useCart();
//   const router = useRouter();

//   const handlePlaceOrder = () => {
//     // Here you can add your order submission logic (API call)
//     alert("Order placed successfully! Payment method: Cash on Delivery");
//     // clearCart();
//     router.push("/order-success"); // redirect to success page if you want
//   };

//   if (cart.length === 0) {
//     return <p className="text-center mt-10 text-gray-600">Your cart is empty.</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

//       <div className="mb-6">
//         {cart.map((item) => (
//           <div key={`${item._id}-${item.size}`} className="flex items-center space-x-4 mb-4">
//             <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//             <div>
//               <h3 className="font-semibold">{item.name}</h3>
//               <p>Size: {item.size}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ₹{item.price * item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h3 className="text-xl font-semibold mb-4">Total: ₹{getTotal()}</h3>

//       <div className="mb-6">
//         <h4 className="font-semibold mb-2">Select Payment Method</h4>
//         <p>Cash on Delivery (COD)</p>
//       </div>

//       <button
//         onClick={handlePlaceOrder}
//         className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default Checkout;
// "use client";

// import { useCart } from "../cartcontext"; // Adjust path if needed
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Checkout = () => {
//   const { cart, getTotal, clearCart } = useCart();
//   const router = useRouter();
//   const [userId, setUserId] = useState("");


//   useEffect(() => {
//     const id = localStorage.getItem("userId");
//     if (id) setUserId(id);
//   }, []);

//   const handlePlaceOrder = async () => {
//     if (!userId) {
//       alert("User not logged in.");
//       return;
//     }

//     const orderData = {
//       userId,
//       items: cart.map((item) => ({
//         product: item._id,
//         quantity: item.quantity,
//       })),
//       totalAmount: getTotal(),
//     };

//     try {
//       console.log("Sending order:", orderData);

//       const response = await axios.post(
//         "http://localhost:4000/api/orders/place",
//         orderData
//       );

//       if (response.status === 201 || response.status === 200) {
//         alert("Order placed successfully!");
//         clearCart();
//         router.push("/order-success");
//       } else {
//         alert("Something went wrong while placing your order.");
//       }
//     } catch (error) {
//       console.error("Order placement error:", error.response?.data || error.message);
//       alert("Failed to place order. Please check the console.");
//     }
//   };

//   if (cart.length === 0) {
//     return <p className="text-center mt-10 text-gray-600">Your cart is empty.</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

//       <div className="mb-6">
//         {cart.map((item) => (
//           <div key={`${item._id}-${item.size}`} className="flex items-center space-x-4 mb-4">
//             <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//             <div>
//               <h3 className="font-semibold">{item.name}</h3>
//               <p>Size: {item.size}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ₹{item.price * item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h3 className="text-xl font-semibold mb-4">Total: ₹{getTotal()}</h3>

//       <div className="mb-6">
//         <h4 className="font-semibold mb-2">Select Payment Method</h4>
//         <p>Cash on Delivery (COD)</p>
//       </div>

//       <button
//         onClick={handlePlaceOrder}
//         className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default Checkout;




// "use client";

// import { useCart } from "../cartcontext"; // Adjust path as needed
// import { useRouter } from "next/navigation";
// import axios from "axios";

// const Checkout = () => {
//   const { cart, getTotal, clearCart } = useCart();
//   const router = useRouter();




//   const handlePlaceOrder = async () => {
//   try {
//     const orderData = {
//       items: cart.map((item) => ({
//         productId: item._id,
//         name: item.name,
//         size: item.size,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       totalAmount: getTotal(),
//     };

//     const response = await axios.post("http://localhost:4000/api/orders/place", orderData);
//     console.log("Sending order:", orderData);


//     if (response.status === 201 || response.status === 200) {
//       alert("Order placed successfully!");
//       clearCart();
//       router.push("/order-success");
//     } else {
//       alert("Something went wrong while placing your order.");
//     }
//   } catch (error) {
//     console.error("Order placement error:", error);
//     alert("Failed to place order. Please try again.");
//   }
// };



//   if (cart.length === 0) {
//     return <p className="text-center mt-10 text-gray-600">Your cart is empty.</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

//       <div className="mb-6">
//         {cart.map((item) => (
//           <div key={`${item._id}-${item.size}`} className="flex items-center space-x-4 mb-4">
//             <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//             <div>
//               <h3 className="font-semibold">{item.name}</h3>
//               <p>Size: {item.size}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ₹{item.price * item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h3 className="text-xl font-semibold mb-4">Total: ₹{getTotal()}</h3>

//       <div className="mb-6">
//         <h4 className="font-semibold mb-2">Select Payment Method</h4>
//         <p>Cash on Delivery (COD)</p>
//       </div>

//       <button
//         onClick={handlePlaceOrder}
//         className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default Checkout;



// "use client";

// import { useCart } from "../cartcontext";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { useEffect, useState } from "react";

// import jwt_decode from "jwt-decode";


// const Checkout = () => {
//   const { cart, getTotal, clearCart } = useCart();
//   const router = useRouter();
//   const [userId, setUserId] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwt_decode(token);
//         setUserId(decoded.id); // ✅ extract `id` from decoded token
//       } catch (err) {
//         console.error("Invalid token:", err);
//         setUserId("");
//       }
//     }
//   }, []);

//   const handlePlaceOrder = async () => {
//     if (!userId) {
//       alert("User not logged in.");
//       return;
//     }

//     const orderData = {
//       userId,
//       items: cart.map((item) => ({
//         product: item._id,
//         quantity: item.quantity,
//       })),
//       totalAmount: getTotal(),
//     };

//     try {
//       const response = await axios.post("http://localhost:4000/api/orders/place", orderData);
//       if (response.status === 201 || response.status === 200) {
//         alert("Order placed successfully!");
//         clearCart();
//         router.push("/order-success");
//       } else {
//         alert("Something went wrong while placing your order.");
//       }
//     } catch (error) {
//       console.error("Order placement error:", error.response?.data || error.message);
//       alert("Failed to place order. Please try again.");
//     }
//   };

//   if (cart.length === 0) {
//     return <p className="text-center mt-10 text-gray-600">Your cart is empty.</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

//       <div className="mb-6">
//         {cart.map((item) => (
//           <div key={`${item._id}-${item.size}`} className="flex items-center space-x-4 mb-4">
//             <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//             <div>
//               <h3 className="font-semibold">{item.name}</h3>
//               <p>Size: {item.size}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ₹{item.price * item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h3 className="text-xl font-semibold mb-4">Total: ₹{getTotal()}</h3>

//       <div className="mb-6">
//         <h4 className="font-semibold mb-2">Select Payment Method</h4>
//         <p>Cash on Delivery (COD)</p>
//       </div>

//       <button
//         onClick={handlePlaceOrder}
//         className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default Checkout;
"use client";

import { useCart } from "../cartcontext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Checkout = () => {
  const { cart, getTotal, clearCart } = useCart();
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setUserId(storedId);
    } else {
      alert("User not logged in.");
    }
  }, []);

  const handlePlaceOrder = async () => {
    if (!userId) {
      alert("User ID missing. Cannot place order.");
      return;
    }

    const orderData = {
      userId: userId,
      items: cart.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
      totalAmount: getTotal(),
    };

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:4000/api/orders/place",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // if your backend needs auth
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        alert("Order placed successfully!");
        clearCart();
        router.push("/order-success");
      } else {
        alert("Something went wrong while placing your order.");
      }
    } catch (error) {
      console.error("Order placement error:", error.response?.data || error.message);
      alert("Failed to place order.");
    }
  };

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

      <div className="mb-6">
        {cart.map((item) => (
          <div key={`${item._id}-${item.size}`} className="flex items-center space-x-4 mb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4">Total: ₹{getTotal()}</h3>

      <div className="mb-6">
        <h4 className="font-semibold mb-2">Select Payment Method</h4>
        <p>Cash on Delivery (COD)</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
