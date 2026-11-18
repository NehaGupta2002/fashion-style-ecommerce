// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const HomePage = () => {
//     const [sliderImages, setSliderImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:4000/api/banners")
//             .then(response => {

//                 setSliderImages(Array.isArray(response.data.banners) ? response.data.banners : []);
//                 setLoading(false);
//             })
//             .catch(() => {
//                 setError("Failed to load banners");
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <div className="text-center text-gray-700 mt-10">Loading...</div>;
//     if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

//     return (
//         <div className="w-full max-w-5xl mx-auto mt-10">
//             <Carousel
//                 showThumbs={false}
//                 autoPlay
//                 infiniteLoop
//                 showStatus={false}
//                 interval={3000}
//                 stopOnHover
//                 swipeable
//                 dynamicHeight
//             >
//                 {sliderImages.map((banner) => (

//                     <div key={banner._id} className="relative w-full h-screen">
//                         <img
//                             src={banner.imageUrl}
//                             alt={banner.description}
//                             className="w-full h-full object-cover"
//                         />
//                         <div>
//                             <h2 className="text-2xl font-semibold">{banner.description}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default HomePage;

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion, AnimatePresence } from "framer-motion";

// const HomePage = () => {
//     const [sliderImages, setSliderImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animateContent, setAnimateContent] = useState(false);

//     useEffect(() => {
//         axios.get("http://localhost:4000/api/banners")
//             .then(response => {
//                 setSliderImages(Array.isArray(response.data.banners) ? response.data.banners : []);
//                 setLoading(false);
//                 setTimeout(() => setAnimateContent(true), 1000); // Initial animation
//             })
//             .catch(() => {
//                 setError("Failed to load banners");
//                 setLoading(false);
//             });
//     }, []);

//     const handleSlideChange = (index) => {
//         setAnimateContent(false);
//         setActiveIndex(index);
//         setTimeout(() => setAnimateContent(true), 1000);
//     };

//     if (loading) return <div className="text-center text-gray-700 mt-10">Loading...</div>;
//     if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

//     return (
//         <div className="w-full max-w-screen-2xl mx-auto mt-5">
//             <Carousel
//                 showThumbs={false}
//                 autoPlay
//                 infiniteLoop
//                 showStatus={false}
//                 interval={5000}
//                 stopOnHover
//                 swipeable
//                 dynamicHeight={false}
//                 showArrows={true}
//                 onChange={handleSlideChange}
//             >
//                 {sliderImages.map((banner, index) => (
//                     <div key={banner._id} className="relative w-full h-screen">
//                         <img
//                             src={banner.imageUrl}
//                             alt={banner.name}
//                             className="w-full h-full object-cover"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

//                         {/* Animate content only for the active slide */}
//                         {index === activeIndex && (
//                             <AnimatePresence>
//                                 {animateContent && (
//                                     <motion.div
//                                         initial="hidden"
//                                         animate="visible"
//                                         exit="hidden"
//                                         variants={{
//                                             hidden: {},
//                                             visible: {},
//                                         }}
//                                         className="absolute bottom-24 left-8 md:left-16 z-20 text-white max-w-xl space-y-6"
//                                     >
//                                         <motion.h2
//                                             initial={{ opacity: 0, y: 40 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ delay: 1, duration: 0.8 }}
//                                             className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
//                                         >
//                                             {banner.name}
//                                         </motion.h2>

//                                         <motion.p
//                                             initial={{ opacity: 0, y: 40 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ delay: 1.5, duration: 0.8 }}
//                                             className="text-lg md:text-xl font-medium drop-shadow"
//                                         >
//                                             {banner.description}
//                                         </motion.p>

//                                         <motion.button
//                                             initial={{ opacity: 0, y: 30 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ delay: 2, duration: 0.6 }}
//                                             className="mt-4 px-8 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
//                                         >
//                                             Shop Now
//                                         </motion.button>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         )}
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default HomePage;

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";
import CategoryComponent from "./categoryComponents";
import Link from "next/link";
import image from "../../../public/images/Kapdelele-website-middle-1.png";



const HomePage = () => {
    const [sliderImages, setSliderImages] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateContent, setAnimateContent] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [bannerRes, productRes] = await Promise.all([
                    axios.get("http://localhost:4000/api/banners"),
                    axios.get("http://localhost:4000/api/products?sort=latest&limit=4"),
                ]);

                setSliderImages(Array.isArray(bannerRes.data.banners) ? bannerRes.data.banners : []);
                setLatestProducts(productRes.data.products || []);
                setTimeout(() => setAnimateContent(true), 1000);
            } catch (err) {
                setError("Failed to load content");
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    const handleSlideChange = (index) => {
        setAnimateContent(false);
        setActiveIndex(index);
        setTimeout(() => setAnimateContent(true), 1000);
    };

    if (loading) return <div className="text-center text-gray-700 mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

    return (
        <div className="w-full max-w-screen-2xl mx-auto mt-5">
            {/* === Hero Carousel === */}
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                interval={5000}
                stopOnHover
                swipeable
                dynamicHeight={false}
                showArrows={true}
                onChange={handleSlideChange}
            >
                {sliderImages.map((banner, index) => (
                    <div key={banner._id} className="relative w-full h-screen">
                        <img src={banner.imageUrl} alt={banner.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                        {index === activeIndex && (
                            <AnimatePresence>
                                {animateContent && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="absolute bottom-24 left-8 md:left-16 z-20 text-white max-w-xl space-y-6"
                                    >
                                        <motion.h2
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 0.8 }}
                                            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                                        >
                                            {banner.name}
                                        </motion.h2>

                                        <motion.p
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.5, duration: 0.8 }}
                                            className="text-lg md:text-xl font-medium drop-shadow"
                                        >
                                            {banner.description}
                                        </motion.p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 2, duration: 0.6 }}
                                        >
                                            <Link
                                                href="/shop"
                                                className="inline-block px-8 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
                                            >
                                                Shop Now
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}
                    </div>
                ))}
            </Carousel>

            <section className="relative py-14 bg-gradient-to-r from-gray-100 via-white to-gray-100 text-center shadow-inner rounded-xl my-10">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight leading-snug">
                        Premium Tees. Lavish Streetwear. Affordable Style.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 font-medium tracking-wide">
                        Step into your style zone — FashionStyle brings the heat with curated looks made just for you.
                    </p>
                    <div className="mt-6">
                        <a
                            href="/shop"
                            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 shadow-md transition"
                        >
                            Browse Collection
                        </a>
                    </div>
                </div>
            </section>

            <div className="min-h-auto bg-white" >
                <section className="py-10 bg-white text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Our Categories</h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Trendy fits, fresh designs — made just for you!
                    </p>
                </section>
     
                {/* <h1 className="text-3xl font-bold text-center mt-6 mb-4">
                    Explore Our Categories
                </h1>
                <h2 className=" mt-6 mb-4 text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1f4068] to-[#278ea5] mb-6 animate-fadeIn">
                    ✨ Explore Our Exclusive Categories ✨
                </h2> */}
                {/* <p className="text-center text-gray-700 text-2xl md:text-2xl  leading-relaxed tracking-wide">
                    Premium Tees | Premium Clothing | Lavish Streetwear | Affordable Style | Your Own Shopping Store
                </p> */}

                {/* <p className="text-3xl font-bold text-center mt-6 mb-4">Premium Tees | Premium Clothing | Lavish Street wear | Affordable Style | Your own shopping store</p> */}
                <CategoryComponent />
            </div>



            {/* === Latest Products Section === */}
            <div className="bg-white-100 py-5 px-4 md:px-8">
                {/* <h2 className="text-3xl font-bold text-center text-navy-800 mb-8">Latest Products</h2> */}
                <section className="py-10 bg-white text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">🆕 Latest Drops</h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Discover the freshest styles just added to our collection. Limited stock, grab yours before it's gone!
                    </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {latestProducts.map((item) => (
                        <Link
                            key={item._id}
                            href={`/products/${item._id}`}
                            className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 block"
                        >


                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                <p className="text-sm text-gray-500 mt-1">{item.category?.name}</p>
                                <p className="text-blue-600 font-bold mt-2 text-xl">₹{item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/shop"
                        className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-semibold"
                    >
                        View All Products
                    </Link>
                </div>
            </div>









            <section className="py-10 bg-blue-50 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-blue-800 mb-4">🔥 Summer Sale is Live!</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Flat <span className="text-red-600 font-bold">30% OFF</span> on all T-shirts till <span className="font-semibold">June 10</span>
                    </p>
                    <a href="/shop" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                        Shop Now
                    </a>
                </div>
            </section>




        </div>






    );
};

export default HomePage;

