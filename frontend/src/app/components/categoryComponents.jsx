// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CategoryComponent = () => {
//   const [categories, setCategories] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/api/categories");
//         const data = await res.json();
//         if (data.success) {
//           setCategories(data.data.filter((cat) => cat.imageUrl));
//         }
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (id) => {
//     router.push(`/category/${id}`);
//   };

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {categories.map((category) => (
//         <div
//           key={category._id}
//           className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
//           onClick={() => handleCategoryClick(category._id)}
//         >


//           <Image
//             src={category.imageUrl}
//             alt={category.name}
//             width={400}
//             height={300}
//             className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {category.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryComponent;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CategoryComponent = () => {
//   const [categories, setCategories] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/api/categories");
//         const data = await res.json();
//         if (data.success) {
//           setCategories(data.data.filter((cat) => !!cat.imageUrl));
//         }
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (id) => {
//     router.push(`/category/${id}`);
//   };

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//       {categories.map((category) => (
//         <div
//           key={category._id}
//           onClick={() => handleCategoryClick(category._id)}
//           className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300"
//         >
//           <div className="overflow-hidden">
//             <Image
//               src={category.imageUrl}
//               alt={category.name}
//               width={400}
//               height={300}
//               loading="lazy"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {category.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryComponent;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CategoryComponent = () => {
//   const [categories, setCategories] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/api/categories");
//         const data = await res.json();
//         if (data.success) {
//           setCategories(data.data.filter((cat) => !!cat.imageUrl));
//         }
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (name) => {
//     // Create slug from category name
//     const slug = name.toLowerCase().replace(/\s+/g, '-');
//     router.push(`/category/${slug}`);
//   };

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//       {categories.map((category) => (
//         <div
//           key={category._id}
//           onClick={() => handleCategoryClick(category.name)}
//           className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300"
//         >
//           <div className="overflow-hidden">
//             <Image
//               src={category.imageUrl}
//               alt={category.name}
//               width={400}
//               height={300}
//               loading="lazy"
//               className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {category.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryComponent;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CategoryComponent = () => {
//   const [categories, setCategories] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/api/categories");
//         const data = await res.json();

//         console.log("✅ All Categories:", data.data);

//         if (data.success) {
//           const filtered = data.data.filter((cat) => !!cat.imageUrl);
//           console.log("✅ Categories with Images:", filtered);
//           setCategories(filtered);
//         }
//       } catch (err) {
//         console.error("❌ Error fetching categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (name) => {
//     const slug = name.toLowerCase().replace(/\s+/g, "-");
//     router.push(`/category/${slug}`);
//   };

//   return (
//     <div className="p-4 bg-white">
//       <h2 className="text-2xl font-bold mb-4 text-center text-[#1f4068]">Browse Categories</h2>

//       <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pb-2">
//         {categories.map((category) => (
//           <div
//             key={category._id}
//             onClick={() => handleCategoryClick(category.name)}
//             className="min-w-[250px] relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
//           >
//             <Image
//               src={category.imageUrl}
//               alt={category.name}
//               width={400}
//               height={300}
//               loading="lazy"
//               className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               {category.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryComponent;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CategoryComponent = () => {
//   const [categories, setCategories] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/api/categories");
//         const data = await res.json();

//         console.log("✅ All Categories:", data.data);

//         if (data.success) {
//           const filtered = data.data.filter((cat) => !!cat.imageUrl);
//           console.log("✅ Categories with Images:", filtered);
//           setCategories(filtered);
//         }
//       } catch (err) {
//         console.error("❌ Error fetching categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (name) => {
//     const slug = name.toLowerCase().replace(/\s+/g, "-");
//     router.push(`/category/${slug}`);
//   };

//   return (
//     <div className="p-4 bg-white">
//       <h2 className="text-2xl font-bold mb-4 text-center text-[#1f4068]">Browse Categories</h2>

//       <div className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
//         {categories.map((category) => (
//           <div
//             key={category._id}
//             onClick={() => handleCategoryClick(category.name)}
//             className="min-w-[250px] flex-shrink-0 relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
//           >
//             <Image
//               src={category.imageUrl}
//               alt={category.name}
//               width={400}
//               height={300}
//               loading="lazy"
//               className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               {category.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryComponent;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CategoryComponent = () => {
//     const [categories, setCategories] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await fetch("http://localhost:4000/api/categories");
//                 const data = await res.json();

//                 console.log("✅ All Categories:", data.data);

//                 if (data.success) {
//                     const filtered = data.data.filter((cat) => !!cat.imageUrl);
//                     setCategories(filtered);
//                 }
//             } catch (err) {
//                 console.error("❌ Error fetching categories:", err);
//             }
//         };

//         fetchCategories();
//     }, []);

//     const handleCategoryClick = (name) => {
//         const slug = name.toLowerCase().replace(/\s+/g, "-");
//         router.push(`/category/${slug}`);
//     };

//     return (
//         <div className="p-4 bg-white">
//             <h2 className="text-2xl font-bold mb-4 text-center text-[#1f4068]">Browse Categories</h2>

//             <div className="flex overflow-x-auto gap-6 px-2 pb-4 scrollbar-hide">

//                 {categories.map((category) => (
//                     <div
//                         key={category._id}
//                         onClick={() => handleCategoryClick(category.name)}
//                         className="min-w-[350px] max-w-[350px] bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300 flex-shrink-0"
//                     >
//                         <Image
//                             src={category.imageUrl}
//                             alt={category.name}
//                             width={300}
//                             height={300}
//                             className="w-full h-48 object-cover rounded-t-xl"
//                         />
//                         <div className="p-3 text-center">
//                             <h3 className="font-semibold text-md text-[#1f4068] capitalize">{category.name}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CategoryComponent;


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/categories");
        const data = await res.json();

        console.log("✅ All Categories:", data.data);

        if (data.success) {
          const filtered = data.data.filter((cat) => !!cat.imageUrl);
          setCategories(filtered);
        }
      } catch (err) {
        console.error("❌ Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/category/${slug}`);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-white via-slate-100 to-white">
      {/* <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1f4068] to-[#278ea5] mb-6 animate-fadeIn">
        ✨ Explore Our Exclusive Categories ✨
      </h2> */}

      <div className="flex overflow-x-auto gap-6 px-2 pb-4 scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category._id}
            onClick={() => handleCategoryClick(category.name)}
            className="min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-500 transform hover:scale-105 hover:opacity-95 relative group flex-shrink-0"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <Image
                src={category.imageUrl}
                alt={category.name}
                width={300}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl"></div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-[#1f4068] capitalize tracking-wide">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Tap to explore</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
