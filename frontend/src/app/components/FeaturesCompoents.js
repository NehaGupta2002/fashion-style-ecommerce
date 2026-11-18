// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const FeaturedProducts = () => {
//     const [products, setProducts] = useState([]);


//     useEffect(() => {
//         axios.get("http://localhost:4000/api/products")
//             .then(res => {
//                 const all = res.data.products || [];
//                 const featured = all.filter(p => p.featured === true);
//                 console.log("All products:", all);
//                 console.log("Featured products:", featured);
//                 setProducts(featured);
//             });
//     }, []);
//     console.log("hello");


//     const responsive = {
//         superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
//         desktop: { breakpoint: { max: 1536, min: 1024 }, items: 4 },
//         tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
//         mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
//     };
//     console.log(products);
//     console.log('hii');

//     return (
//         <div className="w-full max-w-screen-xl mx-auto px-4 py-10">
//             <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Products</h2>

//             <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 autoPlay={false}
//                 arrows
//                 swipeable
//                 draggable
//                 keyBoardControl
//                 containerClass="carousel-container"
//                 itemClass="px-2"
//             >
//                 {products.slice(0, 12).map(product => (
//                     <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//                         <img
//                             src={product.imageUrl}
//                             alt={product.name}
//                             className="h-48 w-full object-cover"
//                         />
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold text-gray-700 truncate">{product.name}</h3>
//                             <p className="text-sm text-gray-500 mt-1">{product.category?.name}</p>
//                             <p className="text-xl font-bold text-black mt-2">₹{product.price}</p>
//                             <button className="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-sm">
//                                 View Product
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default FeaturedProducts;



"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:4000/api/products")
            .then(res => {
                const all = res.data.products || [];
                const featured = all.filter(p => p.featured === true);
                console.log("All products:", all);
                console.log("Featured products:", featured);
                setProducts(featured);
            });
    }, []);


    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
        desktop: { breakpoint: { max: 1536, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Products</h2>

            {products.length === 0 ? (
                <p className="text-center text-gray-500">No featured products available.</p>
            ) : (
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    arrows
                    swipeable
                    draggable
                    keyBoardControl
                    itemClass="px-2"
                >
                    {products.map(product => (
                        <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700 truncate">{product.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{product.category?.name}</p>
                                <p className="text-xl font-bold text-black mt-2">₹{product.price}</p>
                                <button className="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-sm">
                                    View Product
                                </button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default FeaturedProducts;
