



"use client";
import { useState } from "react";


const ProductInfo = ({ product }) => {
  const [loading, setLoading] = useState(false);

  //  replace this with auth context or Redux in real login
  const userId = "123"; 

  const handleAddToCart = async () => {
    if (!userId) {
      alert("Please log in to add items to your cart.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          productId: product._id,
          quantity: 1,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        alert(" " + data.message);
      } else {
        alert("" + data.message || "Failed to add to cart.");
      }
    } catch (err) {
      setLoading(false);
      alert(" Something went wrong.");
      console.error(err);
    }
  };

  return (
    <>

    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
      <p className="text-sm font-bold text-black">{product.category?.name}</p>
      <p className="text-blue-600 text-2xl font-semibold">₹{product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    

      <button
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900"
        onClick={handleAddToCart}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
    </>
  );
};

export default ProductInfo;
