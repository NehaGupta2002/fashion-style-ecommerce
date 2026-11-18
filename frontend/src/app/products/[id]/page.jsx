
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { useCart } from "../../cartcontext"; // Adjust path based on your structure

// const SingleProductPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [sizeError, setSizeError] = useState("");

//   const { addToCart } = useCart();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`http://localhost:4000/api/products/${id}`, {
//           cache: "no-store",
//         });
//         const data = await res.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setFetching(false);
//       }
//     };

//     if (id) fetchProduct();
//   }, [id]);

//   const validateSize = () => {
//     if (!selectedSize) {
//       setSizeError("Please select a size");
//       return false;
//     }
//     setSizeError("");
//     return true;
//   };

//   const handleAddToCart = () => {
//     if (!validateSize()) return;

//     const productToAdd = {
//       id: product._id,
//       name: product.name,
//       price: product.price,
//       image: product.imageUrl,
//       size: selectedSize,
//       quantity,
//     };

//     addToCart(productToAdd);
//     alert("Product added to cart!");
//   };

//   const handleBuyNow = () => {
//     if (!validateSize()) return;

//     handleAddToCart();
//     alert("Redirecting to checkout...");
//     // router.push("/checkout") if you have routing setup
//   };

//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   if (fetching) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-lg text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   if (!product) {
//     return <p className="text-center text-red-600 mt-20">Product not found.</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <div className="grid md:grid-cols-2 gap-8">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="rounded-xl w-full h-auto object-cover"
//         />
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-sm font-bold text-black">{product.category?.name}</p>
//           <p className="text-blue-600 text-2xl font-semibold">₹{product.price}</p>
//           <p className="text-gray-600">{product.description}</p>

//           {/* Size Selection */}
//           <div>
//             <p className="text-sm font-medium text-gray-700 mb-1">Select Size:</p>
//             <div className="flex space-x-3">
//               {["S", "M", "L", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   className={`px-4 py-2 border rounded ${
//                     selectedSize === size
//                       ? "bg-blue-700 text-white"
//                       : "bg-white text-black"
//                   } hover:border-blue-500`}
//                   onClick={() => {
//                     setSelectedSize(size);
//                     setSizeError("");
//                   }}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//             {sizeError && <p className="text-sm text-red-600 mt-1">{sizeError}</p>}
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center space-x-3 mt-3">
//             <button
//               onClick={decreaseQuantity}
//               className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//             >
//               -
//             </button>
//             <span className="text-lg font-medium">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//             >
//               +
//             </button>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 mt-6">
//             <button
//               className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-900"
//               onClick={handleAddToCart}
//               disabled={loading}
//             >
//               {loading ? "Adding..." : "Add to Cart"}
//             </button>

//             <button
//               className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800"
//               onClick={handleBuyNow}
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Buy Now"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;



"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Added router
import { useCart } from "../../cartcontext"; // Adjust path if needed

const SingleProductPage = () => {
  const { id } = useParams();
  const router = useRouter(); // initialize router
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeError, setSizeError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/products/${id}`, {
          cache: "no-store",
        });
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setFetching(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const validateSize = () => {
    if (!selectedSize) {
      setSizeError("Please select a size");
      return false;
    }
    setSizeError("");
    return true;
  };

  const handleAddToCart = () => {
    if (!validateSize()) return;

    const productToAdd = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      size: selectedSize,
      quantity,
    };

    addToCart(productToAdd);
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    if (!validateSize()) return;

    const productToAdd = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      size: selectedSize,
      quantity,
    };

    addToCart(productToAdd); // Add to cart first
    router.push("/checkout"); // Redirect
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (fetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center text-red-600 mt-20">Product not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-xl w-full h-auto object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm font-bold text-black">{product.category?.name}</p>
          <p className="text-blue-600 text-2xl font-semibold">₹{product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Select Size:</p>
            <div className="flex space-x-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-blue-700 text-white"
                      : "bg-white text-black"
                  } hover:border-blue-500`}
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError("");
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            {sizeError && <p className="text-sm text-red-600 mt-1">{sizeError}</p>}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-3 mt-3">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-900"
              onClick={handleAddToCart}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>

            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800"
              onClick={handleBuyNow}
              disabled={loading}
            >
              {loading ? "Processing..." : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
