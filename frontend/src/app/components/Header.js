// "use client";

// import { useState } from "react";
// import { Menu, X, User, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import LogoutButton from "../LogoutButton";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [userMenu, setUserMenu] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const router = useRouter();

//   const handleSearch = (e) => {
//     if (e.key === "Enter" && searchText.trim()) {
//       router.push(`/search?query=${encodeURIComponent(searchText.trim())}`);
//     }
//   };

//   return (
//     <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow text-black">
//       <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <span className="text-2xl font-semibold text-black">FashionStyle</span>
//         </Link>

//         {/* Navigation Links */}
//         <div
//           className={`${menuOpen ? "block w-full" : "hidden"
//             } md:flex md:items-center md:w-auto w-full mt-4 md:mt-0`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-white md:bg-transparent rounded-lg md:rounded-none border md:border-0">
//             <li><Link href="/" className="block px-3 py-2 text-black hover:text-blue-600">Home</Link></li>
//             <li><Link href="/about" className="block px-3 py-2 text-black hover:text-blue-600">About</Link></li>
//             <li><Link href="/shop" className="block px-3 py-2 text-black hover:text-blue-600">Shop</Link></li>
//             <li><Link href="/contact" className="block px-3 py-2 text-black hover:text-blue-600">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           {/* Desktop Search */}
//           <div className="hidden md:block w-72">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 onKeyDown={handleSearch}
//                 className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-white text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Search products..."
//               />
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* User Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setUserMenu(!userMenu)}
//               className="p-2 rounded-full hover:bg-gray-200 text-black"
//             >
//               <User size={22} />
//             </button>
//             {userMenu && (
//               <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border text-sm z-50">
//                 <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 text-black">Login</Link>
//                 <Link href="/register" className="block px-4 py-2 hover:bg-gray-100 text-black">Register</Link>
//                 <LogoutButton />
//               </div>
//             )}
//           </div>

//           {/* Cart Icon */}
//           <Link href="/cart" className="p-2 rounded-full hover:bg-gray-200 text-black">
//             <ShoppingCart size={22} />
//           </Link>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden inline-flex items-center p-2 text-black rounded-lg hover:bg-gray-200"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-2">
//           <div className="relative mb-2">
//             <input
//               type="text"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               onKeyDown={handleSearch}
//               className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-white text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Search..."
//             />
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }




"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import Link from "next/link";
import LogoutButton from "../LogoutButton";



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    // const [searchTerm, setSearchTerm] = useState("");
    const [searchText, setSearchText] = useState("");
    const router = useRouter();


    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim()) {
            router.push(`/shop?search=${encodeURIComponent(searchText)}`);
            setSearchText(""); // Optional: clear input
        }
    };
    return (
        <nav className="bg-white sticky top-0 left-0 w-full z-50 shadow text-black">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-semibold text-black">FashionStyle</span>
                </Link>

                {/* Navigation Links */}
                <div className={`${menuOpen ? "block w-full" : "hidden"} md:flex md:items-center md:w-auto w-full mt-4 md:mt-0`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-white md:bg-transparent rounded-lg md:rounded-none border md:border-0">
                        <li><Link href="/" className="block px-3 py-2 text-black hover:text-blue-600">Home</Link></li>
                        <li><Link href="/about" className="block px-3 py-2 text-black hover:text-blue-600">About</Link></li>
                        <li><Link href="/shop" className="block px-3 py-2 text-black hover:text-blue-600">Shop</Link></li>
                        <li><Link href="/contact" className="block px-3 py-2 text-black hover:text-blue-600">Contact</Link></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">

                    {/* Desktop Search */}
                    <div className="hidden md:block w-72">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-white text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search products..."
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </form>
                    </div>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setUserMenu(!userMenu)}
                            className="p-2 rounded-full hover:bg-gray-200 text-black"
                        >
                            <User size={22} />
                        </button>
                        {userMenu && (
                            <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border text-sm z-50">
                                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 text-black">Login</Link>
                                <Link href="/register" className="block px-4 py-2 hover:bg-gray-100 text-black">Register</Link>
                                <LogoutButton />
                            </div>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <Link href="/cart" className="p-2 rounded-full hover:bg-gray-200 text-black">
                        <ShoppingCart size={22} />
                    </Link>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden inline-flex items-center p-2 text-black rounded-lg hover:bg-gray-200"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Search */}
            {
                menuOpen && (
                    <div className="md:hidden px-4 pb-2">
                        <form onSubmit={handleSearch} className="relative mb-2">
                            <input
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-white text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search..."
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </form>
                    </div>
                )
            }
        </nav >
    );
}


// "use client";
// import { useState } from "react";
// import { Menu, X, User, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import LogoutButton from "../LogoutButton";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [userMenu, setUserMenu] = useState(false);

//     return (
//         <nav className="bg-white sticky top-0 left-0 w-full z-50 shadow text-black">
//             <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center space-x-2">
//                     <span className="text-2xl font-semibold text-black">FashionStyle</span>
//                 </Link>

//                 {/* Navigation Links */}
//                 <div
//                     className={`${menuOpen ? "block w-full" : "hidden"
//                         } md:flex md:items-center md:w-auto w-full mt-4 md:mt-0`}
//                 >
//                     <ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-white md:bg-transparent rounded-lg md:rounded-none border md:border-0">
//                         <li>
//                             <Link
//                                 href="/"
//                                 className="block px-3 py-2 text-black hover:text-blue-600"
//                             >
//                                 Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/about"
//                                 className="block px-3 py-2 text-black hover:text-blue-600"
//                             >
//                                 About
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/shop"
//                                 className="block px-3 py-2 text-black hover:text-blue-600"
//                             >
//                                 Shop
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/contact"
//                                 className="block px-3 py-2 text-black hover:text-blue-600"
//                             >
//                                 Contact
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right Section */}
//                 <div className="flex items-center space-x-4">
//                     {/* Search Input (desktop only) */}
//                     <div className="hidden md:block w-72">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-white text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Search products..."
//                             />
//                             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                                 <svg
//                                     className="w-4 h-4 text-gray-500"
//                                     fill="none"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                                     />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* User Icon with Dropdown */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setUserMenu(!userMenu)}
//                             className="p-2 rounded-full hover:bg-gray-200 text-black"
//                         >
//                             <User size={22} />
//                         </button>
//                         {userMenu && (
//                             <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border text-sm z-50">
//                                 <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 text-black">
//                                     Login
//                                 </Link>
//                                 <Link href="/register" className="block px-4 py-2 hover:bg-gray-100 text-black">
//                                     Register
//                                 </Link>
//                                 <LogoutButton />
//                             </div>
//                         )}
//                     </div>

//                     {/* Cart Icon */}
//                     <Link
//                         href="/cart"
//                         className="p-2 rounded-full hover:bg-gray-200 text-black"
//                     >
//                         <ShoppingCart size={22} />
//                     </Link>

//                     {/* Hamburger Menu (Mobile) */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="md:hidden inline-flex items-center p-2 text-black rounded-lg hover:bg-gray-200"
//                     >
//                         <span className="sr-only">Toggle Menu</span>
//                         {menuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Search */}
//             {menuOpen && (
//                 <div className="md:hidden px-4 pb-2">
//                     <div className="relative mb-2">
//                         <input
//                             type="text"
//                             className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-white text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
//                             placeholder="Search..."
//                         />
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                             <svg
//                                 className="w-4 h-4 text-gray-500"
//                                 fill="none"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }


// "use client";
// import { useState } from "react";
// import { Menu, X, User, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import LogoutButton from "../LogoutButton";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [userMenu, setUserMenu] = useState(false);

//     return (
//         <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow">
//             <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center space-x-2">
//                     <span className="text-2xl font-semibold text-black dark:text-white">
//                         FashionStyle
//                     </span>
//                 </Link>


//                 {/* Navigation Links */}
//                 <div
//                     className={`${menuOpen ? "block w-full" : "hidden"
//                         } md:flex md:items-center md:w-auto w-full mt-4 md:mt-0`}
//                 >
//                     <ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-gray-50 md:bg-transparent rounded-lg md:rounded-none border md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//                         <li>
//                             <Link
//                                 href="/"
//                                 className="block px-3 py-2 text-blue-700 bg-blue-100 md:bg-transparent md:text-blue-700 rounded md:dark:text-blue-500"
//                             >
//                                 Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/about"
//                                 className="block px-3 py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                             >
//                                 About
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/shop"
//                                 className="block px-3 py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                             >
//                                 Shop
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/contact"
//                                 className="block px-3 py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                             >
//                                 Contact
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right Section */}
//                 <div className="flex items-center space-x-4">
//                     {/* Search Input (desktop only) */}
//                     <div className="hidden md:block w-72">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                                 placeholder="Search products..."
//                             />
//                             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                                 <svg
//                                     className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                                     fill="none"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                                     />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>



//                     {/* User Icon with Dropdown */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setUserMenu(!userMenu)}
//                             className="p-2 rounded-full hover:bg-gray-100 text-gray-700 dark:text-white dark:hover:bg-gray-700"
//                         >
//                             <User size={22} />
//                         </button>
//                         {userMenu && (
//                             <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border text-sm z-50">
//                                 <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 text-black">
//                                     Login
//                                 </Link>
//                                 <Link href="/register" className="block px-4 py-2 hover:bg-gray-100 text-black">
//                                     Register
//                                 </Link>
//                                 <LogoutButton />
//                             </div>
//                         )}
//                     </div>

//                     {/* Cart Icon */}
//                     <Link
//                         href="/cart"
//                         className="p-2 rounded-full hover:bg-gray-100 text-gray-700 dark:text-white dark:hover:bg-gray-700"
//                     >
//                         <ShoppingCart size={22} />
//                     </Link>

//                     {/* Hamburger Menu (Mobile) */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="md:hidden inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
//                     >
//                         <span className="sr-only">Toggle Menu</span>
//                         {menuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>


//             </div>

//             {/* Mobile Search (visible when menu is open) */}
//             {menuOpen && (
//                 <div className="md:hidden px-4 pb-2">
//                     <div className="relative mb-2">
//                         <input
//                             type="text"
//                             className="w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                             placeholder="Search..."
//                         />
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                             <svg
//                                 className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                                 fill="none"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }
