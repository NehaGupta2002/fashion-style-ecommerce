


// "use client";
// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { Heart } from "lucide-react";
// import Link from "next/link";

// const ShopPage = () => {
//   const [products, setProducts] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(12);
//   const [status, setStatus] = useState("loading");
//   const [sort, setSort] = useState("default");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchProducts = async () => {
//     try {
//       let url = `http://localhost:4000/api/products?limit=${visibleCount}&page=${page}`;
//       if (sort && sort !== "default") url += `&sort=${sort}`;

//       const res = await fetch(url);
//       const data = await res.json();
//       setProducts(data.products);
//       setTotalPages(data.totalPages || 3); // default to 3 if not provided
//       setStatus("success");
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setStatus("error");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [visibleCount, sort, page]);

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gray-100 py-10 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-3xl font-bold text-center text-navy-800 mb-6">
//             Explore Our Tees Collection
//           </h1>

//           {/* Filters */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             {/* Show Count */}
//             <div className="flex items-center text-sm font-medium text-gray-700 space-x-2">
//               <span>Show:</span>
//               {[4, 8, 12, 16].map((count) => (
//                 <button
//                   key={count}
//                   onClick={() => {
//                     setVisibleCount(count);
//                     setPage(1);
//                   }}
//                   className={`px-2 py-1 ${visibleCount === count
//                     ? "text-black underline"
//                     : "text-gray-500 hover:text-black"
//                     }`}
//                 >
//                   {count}
//                 </button>
//               ))}
//             </div>

//             {/* Sorting */}
//             <div className="flex items-center">
//               <label className="mr-2 text-gray-600 font-medium">Sort by:</label>
//               <select
//                 className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={sort}
//                 onChange={(e) => {
//                   setSort(e.target.value);
//                   setPage(1);
//                 }}
//               >
//                 <option value="default">Default</option>
//                 <option value="priceLowToHigh">Price: Low to High</option>
//                 <option value="priceHighToLow">Price: High to Low</option>
//                 <option value="latest">Latest Products</option>
//                 <option value="rating">Average Rating</option>
//               </select>
//             </div>
//           </div>

//           {/* Products */}
//           {status === "loading" && <p className="text-center text-gray-600">Loading products...</p>}
//           {status === "error" && <p className="text-center text-red-500">Failed to load products.</p>}
//           {status === "success" && (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                 {products.map((item) => (
//                   <Link
//                     key={item._id}
//                     href={`/products/${item._id}`}
//                     className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 block"
//                   >
//                     <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 z-10">
//                       <Heart size={20} strokeWidth={2} />
//                     </button>

//                     <img
//                       src={item.imageUrl}
//                       alt={item.name}
//                       className="w-full h-60 object-cover"
//                     />
//                     <div className="p-4 text-center">
//                       <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
//                       <p className="text-sm text-gray-500 mt-1">{item.category?.name}</p>
//                       <p className="text-blue-600 font-bold mt-2 text-xl">₹{item.price}</p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="mt-10 flex justify-center items-center gap-3">
//                 {[...Array(totalPages).keys()].map((_, idx) => {
//                   const current = idx + 1;
//                   return (
//                     <button
//                       key={current}
//                       onClick={() => setPage(current)}
//                       className={`px-4 py-2 border rounded ${page === current
//                         ? "bg-red-600 text-white font-bold"
//                         : "bg-white text-gray-800 hover:bg-gray-200"
//                         }`}
//                     >
//                       {current}
//                     </button>
//                   );
//                 })}
//                 <button
//                   onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
//                   className="text-xl font-bold text-gray-700 hover:text-black"
//                 >
//                   &gt;
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShopPage;






// "use client";
// import { useEffect, useState } from "react";
// // import Header from "../components/Header";
// import { Heart } from "lucide-react";
// import Link from "next/link";

// const ShopPage = () => {
//   const [products, setProducts] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(12);
//   const [status, setStatus] = useState("loading");
//   const [sort, setSort] = useState("default");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchProducts = async () => {
//     try {
//       let url = `http://localhost:4000/api/products?limit=${visibleCount}&page=${page}`;
//       if (sort && sort !== "default") url += `&sort=${sort}`;
//       if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`;

//       const res = await fetch(url);
//       const data = await res.json();
//       setProducts(data.products);
//       setTotalPages(data.totalPages || 3);
//       setStatus("success");
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setStatus("error");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [visibleCount, sort, page]);

//   return (
//     <>
//       {/* <Header /> */}
//       <div className="min-h-screen bg-gray-100 py-10 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-3xl font-bold text-center text-navy-800 mb-6">
//             Explore Our Tees Collection
//           </h1>

//           {/* 🔍 Search Bar */}
//           <div className="mb-6 flex items-center justify-center">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search products..."
//               className="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
//             />
//             <button
//               onClick={() => {
//                 setPage(1);
//                 fetchProducts();
//               }}
//               className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
//             >
//               Search
//             </button>
//           </div>

//           {/* Filters */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             {/* Show Count */}
//             <div className="flex items-center text-sm font-medium text-gray-700 space-x-2">
//               <span>Show:</span>
//               {[4, 8, 12, 16].map((count) => (
//                 <button
//                   key={count}
//                   onClick={() => {
//                     setVisibleCount(count);
//                     setPage(1);
//                   }}
//                   className={`px-2 py-1 ${visibleCount === count
//                     ? "text-black underline"
//                     : "text-gray-500 hover:text-black"
//                     }`}
//                 >
//                   {count}
//                 </button>
//               ))}
//             </div>

//             {/* Sorting */}
//             <div className="flex items-center">
//               <label className="mr-2 text-gray-600 font-medium">Sort by:</label>
//               <select
//                 className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={sort}
//                 onChange={(e) => {
//                   setSort(e.target.value);
//                   setPage(1);
//                 }}
//               >
//                 <option value="default">Default</option>
//                 <option value="priceLowToHigh">Price: Low to High</option>
//                 <option value="priceHighToLow">Price: High to Low</option>
//                 <option value="latest">Latest Products</option>
//                 <option value="rating">Average Rating</option>
//               </select>
//             </div>
//           </div>

//           {/* Products */}
//           {status === "loading" && <p className="text-center text-gray-600">Loading products...</p>}
//           {status === "error" && <p className="text-center text-red-500">Failed to load products.</p>}
//           {status === "success" && (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                 {products.map((item) => (
//                   <Link
//                     key={item._id}
//                     href={`/products/${item._id}`}
//                     className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 block"
//                   >
//                     <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 z-10">
//                       <Heart size={20} strokeWidth={2} />
//                     </button>

//                     <img
//                       src={item.imageUrl}
//                       alt={item.name}
//                       className="w-full h-60 object-cover"
//                     />
//                     <div className="p-4 text-center">
//                       <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
//                       <p className="text-sm text-gray-500 mt-1">{item.category?.name}</p>
//                       <p className="text-blue-600 font-bold mt-2 text-xl">₹{item.price}</p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="mt-10 flex justify-center items-center gap-3">
//                 {[...Array(totalPages).keys()].map((_, idx) => {
//                   const current = idx + 1;
//                   return (
//                     <button
//                       key={current}
//                       onClick={() => setPage(current)}
//                       className={`px-4 py-2 border rounded ${page === current
//                         ? "bg-red-600 text-white font-bold"
//                         : "bg-white text-gray-800 hover:bg-gray-200"
//                         }`}
//                     >
//                       {current}
//                     </button>
//                   );
//                 })}
//                 <button
//                   onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
//                   className="text-xl font-bold text-gray-700 hover:text-black"
//                 >
//                   &gt;
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShopPage;



"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [status, setStatus] = useState("loading");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  const fetchProducts = async () => {
    try {
      let url = "";

      if (searchQuery) {
        url = `http://localhost:4000/api/products/search?search=${encodeURIComponent(
          searchQuery
        )}`;
      } else {
        url = `http://localhost:4000/api/products?limit=${visibleCount}&page=${page}`;
        if (sort && sort !== "default") url += `&sort=${sort}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (searchQuery) {
        setProducts(data.data || []);
        setTotalPages(1);
      } else {
        setProducts(data.products || []);
        const total = data.total ?? data.products?.length ?? 0;
        const pages =
          data.totalPages ||
          (total ? Math.ceil(total / visibleCount) : 1);
        setTotalPages(pages);
      }

      setStatus("success");
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, visibleCount, sort, page]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-navy-800 mb-6">
          Explore Our Tees Collection
        </h1>

        {/* Filters */}
        {!searchQuery && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            {/* Show Count */}
            <div className="flex items-center text-sm font-medium text-gray-700 space-x-2">
              <span>Show:</span>
              {[4, 8, 12, 16].map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    setVisibleCount(count);
                    setPage(1);
                  }}
                  className={`px-2 py-1 ${
                    visibleCount === count
                      ? "text-black underline"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex items-center">
              <label className="mr-2 text-gray-600 font-medium">Sort by:</label>
              <select
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
              >
                <option value="default">Default</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="latest">Latest Products</option>
                <option value="rating">Average Rating</option>
              </select>
            </div>
          </div>
        )}

        {/* Products */}
        {status === "loading" && (
          <p className="text-center text-gray-600">Loading products...</p>
        )}
        {status === "error" && (
          <p className="text-center text-red-500">Failed to load products.</p>
        )}
        {status === "success" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((item) => (
                <Link
                  key={item._id}
                  href={`/products/${item._id}`}
                  className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 block"
                >
                  {/* <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-60 object-cover"
                  /> */}

                  <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-60 object-cover"
                    />

                  
            
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.category?.name}
                    </p>
                    <p className="text-blue-600 font-bold mt-2 text-xl">
                      ₹{item.price}
                    </p>
                  </div>
                </Link>
              ))}
              {products.length === 0 && (
                <p className="text-center col-span-full text-gray-500">
                  No products found.
                </p>
              )}
            </div>

            {/* Pagination */}
            {!searchQuery && (
              <div className="mt-10 flex justify-center items-center gap-3">
                {/* Previous Button */}
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page <= 1}
                  className={`px-3 py-2 text-xl font-bold rounded ${
                    page <= 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-700 hover:text-black hover:bg-gray-200 cursor-pointer"
                  }`}
                  aria-label="Previous Page"
                >
                  &lt;
                </button>

                {/* Page Number Buttons */}
                {[...Array(totalPages).keys()].map((_, idx) => {
                  const current = idx + 1;
                  return (
                    <button
                      key={current}
                      onClick={() => setPage(current)}
                      className={`px-4 py-2 border rounded cursor-pointer ${
                        page === current
                          ? "bg-red-600 text-white font-bold"
                          : "bg-white text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {current}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() =>
                    setPage((prev) => (prev < totalPages ? prev + 1 : prev))
                  }
                  disabled={page >= totalPages}
                  className={`px-3 py-2 text-xl font-bold rounded ${
                    page >= totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-700 hover:text-black hover:bg-gray-200 cursor-pointer"
                  }`}
                  aria-label="Next Page"
                >
                  &gt;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShopPage;




// "use client";
// import { useEffect, useState } from "react";

// import Link from "next/link";

// const ShopPage = () => {
//   const [products, setProducts] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(12);
//   const [status, setStatus] = useState("loading");
//   const [sort, setSort] = useState("default");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchProducts = async () => {
//     try {
//       let url = `http://localhost:4000/api/products?limit=${visibleCount}&page=${page}`;
//       if (sort && sort !== "default") url += `&sort=${sort}`;

//       const res = await fetch(url);
//       const data = await res.json();
//       setProducts(data.products);
//       setTotalPages(data.totalPages || 3);
//       setStatus("success");
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setStatus("error");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [visibleCount, sort, page]);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-navy-800 mb-6">
//           Explore Our Tees Collection
//         </h1>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//           {/* Show Count */}
//           <div className="flex items-center text-sm font-medium text-gray-700 space-x-2">
//             <span>Show:</span>
//             {[4, 8, 12, 16].map((count) => (
//               <button
//                 key={count}
//                 onClick={() => {
//                   setVisibleCount(count);
//                   setPage(1);
//                 }}
//                 className={`px-2 py-1 ${
//                   visibleCount === count
//                     ? "text-black underline"
//                     : "text-gray-500 hover:text-black"
//                 }`}
//               >
//                 {count}
//               </button>
//             ))}
//           </div>

//           {/* Sorting */}
//           <div className="flex items-center">
//             <label className="mr-2 text-gray-600 font-medium">Sort by:</label>
//             <select
//               className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={sort}
//               onChange={(e) => {
//                 setSort(e.target.value);
//                 setPage(1);
//               }}
//             >
//               <option value="default">Default</option>
//               <option value="priceLowToHigh">Price: Low to High</option>
//               <option value="priceHighToLow">Price: High to Low</option>
//               <option value="latest">Latest Products</option>
//               <option value="rating">Average Rating</option>
//             </select>
//           </div>
//         </div>

//         {/* Products */}
//         {status === "loading" && (
//           <p className="text-center text-gray-600">Loading products...</p>
//         )}
//         {status === "error" && (
//           <p className="text-center text-red-500">Failed to load products.</p>
//         )}
//         {status === "success" && (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               {products.map((item) => (
//                 <Link
//                   key={item._id}
//                   href={`/products/${item._id}`}
//                   className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 block"
//                 >
                  

//                   <img
//                     src={item.imageUrl}
//                     alt={item.name}
//                     className="w-full h-60 object-cover"
//                   />
//                   <div className="p-4 text-center">
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       {item.name}
//                     </h2>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {item.category?.name}
//                     </p>
//                     <p className="text-blue-600 font-bold mt-2 text-xl">
//                       ₹{item.price}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="mt-10 flex justify-center items-center gap-3">
//               {[...Array(totalPages).keys()].map((_, idx) => {
//                 const current = idx + 1;
//                 return (
//                   <button
//                     key={current}
//                     onClick={() => setPage(current)}
//                     className={`px-4 py-2 border rounded ${
//                       page === current
//                         ? "bg-red-600 text-white font-bold"
//                         : "bg-white text-gray-800 hover:bg-gray-200"
//                     }`}
//                   >
//                     {current}
//                   </button>
//                 );
//               })}
//               <button
//                 onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
//                 className="text-xl font-bold text-gray-700 hover:text-black"
//               >
//                 &gt;
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopPage;


