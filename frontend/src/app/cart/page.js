
"use client";

import { useCart } from "../cartcontext"; // Adjust path if needed
import { useRouter } from "next/navigation";


const CartComponent = () => {
  const { cart, removeFromCart, getTotal } = useCart();
   const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={`${item._id}-${item.size}`} // unique key by id and size
                className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">Size: {item.size}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-gray-700 font-medium">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id, item.size)}
                  className="mt-4 md:mt-0 text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <h3 className="text-2xl font-semibold text-gray-800">
              Total: ₹{getTotal()}
            </h3>
          

            <button
              className="mt-4 px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
              onClick={() => router.push("/checkout")}
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;

