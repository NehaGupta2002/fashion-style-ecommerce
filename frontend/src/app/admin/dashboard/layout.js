// "use client";
// import React from "react";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   Home,
//   ShoppingCart,
//   FolderPlus,
//   List,
//   PlusSquare,
// } from "lucide-react";

// const navigationItems = [
//   { title: "Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
//   { title: "Orders", path: "/orders", icon: <ShoppingCart size={20} /> },
//   { title: "Category List", path: "/admin/dashboard/categorylist", icon: <List size={20} /> },
//   { title: "Add Category", path: "/admin/dashboard/addcategory", icon: <FolderPlus size={20} /> },
//   { title: "Product List", path: "/admin/dashboard/productlist", icon: <List size={20} /> },
//   { title: "Add Product", path: "/admin/dashboard/addproduct", icon: <PlusSquare size={20} /> },
// ];

// export default function DashboardLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <nav className="w-64 bg-white border-r border-gray-300 flex flex-col">
//         <div className="px-6 py-4 border-b border-gray-300 font-bold text-xl">
//           Admin Dashboard
//         </div>
//         <ul className="flex-grow px-4 py-6 space-y-2">
//           {navigationItems.map(({ title, path, icon }) => {
//             const isActive = pathname === path;
//             return (
//               <li
//                 key={path}
//                 onClick={() => router.push(path)}
//                 className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-gray-200 ${
//                   isActive ? "bg-blue-600 text-white" : "text-gray-700"
//                 }`}
//               >
//                 {icon}
//                 <span className="font-medium">{title}</span>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Content */}
//       <main className="flex-grow p-8">{children}</main>
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   Menu,
//   X,
//   Home,
//   ShoppingCart,
//   FolderPlus,
//   List,
//   PlusSquare,
// } from "lucide-react";

// const navigationItems = [
//   { title: "Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
//   { title: "Orders", path: "/orders", icon: <ShoppingCart size={20} /> },
//   { title: "Category List", path: "/admin/dashboard/categorylist", icon: <List size={20} /> },
//   { title: "Add Category", path: "/admin/dashboard/addcategory", icon: <FolderPlus size={20} /> },
//   { title: "Product List", path: "/admin/dashboard/productlist", icon: <List size={20} /> },
//   { title: "Add Product", path: "/admin/dashboard/addproduct", icon: <PlusSquare size={20} /> },
// ];

// export default function DashboardLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Mobile header */}
//       <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-20 flex items-center justify-between px-4 py-3 shadow">
//         <span className="font-bold text-lg">Admin Dashboard</span>
//         <button onClick={toggleSidebar}>
//           {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static z-30 top-0 left-0 h-full w-64 bg-white border-r border-gray-300 transition-transform duration-300 ease-in-out transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         }`}
//       >
//         <div className="px-6 py-4 border-b border-gray-300 font-bold text-xl hidden md:block">
//           Admin Dashboard
//         </div>
//         <ul className=" py-6 space-y-2">
//           {navigationItems.map(({ title, path, icon }) => {
//             const isActive = pathname === path;
//             return (
//               <li
//                 key={path}
//                 onClick={() => {
//                   router.push(path);
//                   setSidebarOpen(false); // close sidebar on mobile
//                 }}
//                 className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-gray-200 ${
//                   isActive ? "bg-blue-600 text-white" : "text-gray-700"
//                 }`}
//               >
//                 {icon}
//                 <span className="font-medium">{title}</span>
//               </li>
//             );
//           })}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow md:ml-64 p-4 pt-16 md:pt-8">{children}</main>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  FolderPlus,
  List,
  PlusSquare,
} from "lucide-react";

const navigationItems = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
  { title: "Orders", path: "/admin/dashboard/orders", icon: <ShoppingCart size={20} /> },
  { title: "Category List", path: "/admin/dashboard/categorylist", icon: <List size={20} /> },
  { title: "Add Category", path: "/admin/dashboard/addcategory", icon: <FolderPlus size={20} /> },
  { title: "Product List", path: "/admin/dashboard/productlist", icon: <List size={20} /> },
  { title: "Add Product", path: "/admin/dashboard/addproduct", icon: <PlusSquare size={20} /> },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-20 flex items-center justify-between px-4 py-3 shadow">
        <span className="font-bold text-lg">Admin Dashboard</span>
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-30 top-0 left-0 h-full w-64 bg-white border-r border-gray-300 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="px-6 py-4 border-b border-gray-300 font-bold text-xl hidden md:block">
          Admin Dashboard
        </div>
        <ul className="py-6 space-y-2">
          {navigationItems.map(({ title, path, icon }) => {
            const isActive = pathname === path;
            return (
              <li
                key={path}
                onClick={() => {
                  router.push(path);
                  setSidebarOpen(false); // close sidebar on mobile
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-gray-200 ${isActive ? "bg-blue-600 text-white" : "text-gray-700"
                  }`}
              >
                {icon}
                <span className="font-medium">{title}</span>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-start min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
}
