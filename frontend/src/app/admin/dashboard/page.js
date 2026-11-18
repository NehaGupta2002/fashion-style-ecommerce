// "use client";

// import * as React from 'react';
// import { createTheme, styled } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid';

// import CategoryList from './categorylist/page';
// import AddCategory from './addcategory/page';
// import ProductList from './productlist/page';
// import Addproduct from './addproduct/page';

// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'orders',
//     title: 'Orders',
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     kind: 'divider',
//   },
//   {
//     kind: 'header',
//     title: 'Analytics',
//   },
//   {
//     segment: 'reports',
//     title: 'category',
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: 'categorylist',
//         title: 'CategoryList',
//         icon: <DescriptionIcon />,
//         onClick: () => navigate('/categorylist'),
//       },
//       {
//         segment: 'addcategory',
//         title: 'AddCategory',
//         icon: <DescriptionIcon />,
//         onClick: () => navigate('/addcategory'),
//       },
//     ],
//   },
//   {
//     segment: 'admin/dashboard/',
//     title: 'Product',
//     icon: <LayersIcon />,
//     children: [
//       {
//         segment: 'productlist',
//         title: 'ProductList',
//         icon: <DescriptionIcon />,
//         onClick: () => navigate('/productlist'),
//       },
//       {
//         segment: 'addproduct',
//         title: 'AddProduct',
//         icon: <DescriptionIcon />,
//         onClick: () => navigate('/addproduct'),
//       },
//     ],
//   },
// ];

// const demoTheme = createTheme({
//   colorSchemes: { light: true, dark: true },
//   cssVariables: {
//     colorSchemeSelector: 'class',
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const router = useDemoRouter('/dashboard');

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         {/* <PageContainer>
//           <Grid container spacing={1}>
//             <Grid size={5} />
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={4}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={8}>
//               <Skeleton height={100} />
//             </Grid>

//             <Grid size={12}>
//               <Skeleton height={150} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>

//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//           </Grid>
//         </PageContainer> */}


//         <PageContainer>
//           {router.pathname === '/categorylist' && <CategoryList />}
//           {router.pathname === '/addcategory' && <AddCategory />}
//           {router.pathname === '/productlist' && <ProductList />}
//           {router.pathname === '/addproduct' && <Addproduct />}
//           {router.pathname === '/dashboard' && (
//             <Grid container spacing={1}>
//               <Grid item xs={12}><Skeleton height={14} /></Grid>
//               <Grid item xs={12}><Skeleton height={14} /></Grid>
//               <Grid item xs={4}><Skeleton height={100} /></Grid>
//               <Grid item xs={8}><Skeleton height={100} /></Grid>
//               <Grid item xs={12}><Skeleton height={150} /></Grid>
//               <Grid item xs={12}><Skeleton height={14} /></Grid>
//               <Grid item xs={3}><Skeleton height={100} /></Grid>
//               <Grid item xs={3}><Skeleton height={100} /></Grid>
//               <Grid item xs={3}><Skeleton height={100} /></Grid>
//               <Grid item xs={3}><Skeleton height={100} /></Grid>
//             </Grid>
//           )}
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }



// "use client";

// import * as React from "react";
// import { createTheme, styled } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid";

// import CategoryList from "./categorylist/page";
// import AddCategory from "./addcategory/page";
// import ProductList from "./productlist/page";
// import Addproduct from "./addproduct/page";

// const demoTheme = createTheme({
//   colorSchemes: { light: true, dark: true },
//   cssVariables: {
//     colorSchemeSelector: "class",
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),


// "use client";

// import * as React from "react";
// import { createTheme, styled } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid";
// import { usePathname, useRouter } from "next/navigation";

// import CategoryList from "./categorylist/page";
// import AddCategory from "./addcategory/page";
// import ProductList from "./productlist/page";
// import Addproduct from "./addproduct/page";

// // Theme setup
// const demoTheme = createTheme({
//   colorSchemes: { light: true, dark: false },
//   cssVariables: {
//     colorSchemeSelector: "class",
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// // Skeleton loading block
// const Skeleton = styled("div")(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// // Main layout component
// export default function DashboardLayoutBasic(props) {
//   const { window } = props;
//   const router = useRouter();
//   const pathname = usePathname();
//   const demoWindow = window ? window() : undefined;

//   const navigation = React.useMemo(
//     () => [
//       { kind: "header", title: "Main items" },
//       {
//         segment: "dashboard",
//         title: "Dashboard",
//         icon: <DashboardIcon />,
//         onClick: () => router.push("/admin/dashboard"),
//       },
//       {
//         segment: "orders",
//         title: "Orders",
//         icon: <ShoppingCartIcon />,
//         onClick: () => router.push("/admin/dashboard/orders"),
//       },
//       { kind: "divider" },
//       { kind: "header", title: "Analytics" },
//       {
//         segment: "reports",
//         title: "Category",
//         icon: <BarChartIcon />,
//         children: [
//           {
//             segment: "categorylist",
//             title: "CategoryList",
//             icon: <DescriptionIcon />,
//             onClick: () => router.push("/admin/dashboard/categorylist"),
//           },
//           {
//             segment: "addcategory",
//             title: "AddCategory",
//             icon: <DescriptionIcon />,
//             onClick: () => router.push("/admin/dashboard/addcategory"),
//           },
//         ],
//       },
//       {
//         segment: "product",
//         title: "Product",
//         icon: <LayersIcon />,
//         children: [
//           {
//             segment: "productlist",
//             title: "ProductList",
//             icon: <DescriptionIcon />,
//             onClick: () => router.push("/admin/dashboard/productlist"),
//           },
//           {
//             segment: "addproduct",
//             title: "AddProduct",
//             icon: <DescriptionIcon />,
//             onClick: () => router.push("/admin/dashboard/addproduct"),
//           },
//         ],
//       },
//     ],
//     [router]
//   );

//   return (
//     <AppProvider
//       navigation={navigation}
//       router={{ pathname }} // minimal router for Toolpad
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer>
//           {/* Conditional page rendering based on current pathname */}
//           {pathname === "/admin/dashboard" && (
//             <Grid container spacing={1}>
//               {[...Array(10)].map((_, index) => (
//                 <Grid item xs={index < 2 ? 12 : index < 4 ? 6 : 3} key={index}>
//                   <Skeleton height={index < 2 ? 14 : 100} />
//                 </Grid>
//               ))}
//             </Grid>
//           )}

//           {pathname === "/admin/dashboard/categorylist" && <CategoryList />}
//           {pathname === "/admin/dashboard/addcategory" && <AddCategory />}
//           {pathname === "/admin/dashboard/productlist" && <ProductList />}
//           {pathname === "/admin/dashboard/addproduct" && <Addproduct />}
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }
// "use client";

// import * as React from "react";
// import { createTheme, styled } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid";
// import { useRouter, usePathname } from "next/navigation";

// import CategoryList from "./categorylist/page";
// import AddCategory from "./addcategory/page";
// import ProductList from "./productlist/page";
// import Addproduct from "./addproduct/page";

// const demoTheme = createTheme({
//   colorSchemes: { light: true, dark: true },
//   cssVariables: {
//     colorSchemeSelector: "class",
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// const Skeleton = styled("div")(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function DashboardLayoutBasic(props) {
//   const { window } = props;

//   // Next.js router & path for navigation & pathname
//   const nextRouter = useRouter();
//   const pathname = usePathname();

//   // Navigation menu config using nextRouter.push for navigation
//   const navigation = React.useMemo(
//     () => [
//       { kind: "header", title: "Main items" },
//       {
//         segment: "dashboard",
//         title: "Dashboard",
//         icon: <DashboardIcon />,
//         onClick: () => nextRouter.push("/admin/dashboard"),
//       },
//       {
//         segment: "orders",
//         title: "Orders",
//         icon: <ShoppingCartIcon />,
//         onClick: () => nextRouter.push("/orders"),
//       },
//       { kind: "divider" },
//       { kind: "header", title: "Analytics" },
//       {
//         segment: "reports",
//         title: "Category",
//         icon: <BarChartIcon />,
//         children: [
//           {
//             segment: "categorylist",
//             title: "CategoryList",
//             icon: <DescriptionIcon />,
//             onClick: () => nextRouter.push("/admin/dashboard/categorylist"),
//           },
//           {
//             segment: "addcategory",
//             title: "AddCategory",
//             icon: <DescriptionIcon />,
//             onClick: () => nextRouter.push("/admin/dashboard/addcategory"),
//           },
//         ],
//       },
//       {
//         segment: "product",
//         title: "Product",
//         icon: <LayersIcon />,
//         children: [
//           {
//             segment: "productlist",
//             title: "ProductList",
//             icon: <DescriptionIcon />,
//             onClick: () => nextRouter.push("/admin/dashboard/productlist"),
//           },
//           {
//             segment: "addproduct",
//             title: "AddProduct",
//             icon: <DescriptionIcon />,
//             onClick: () => nextRouter.push("/admin/dashboard/addproduct"),
//           },
//         ],
//       },
//     ],
//     [nextRouter]
//   );

//   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={navigation}
//       // Pass the correct router shape required by AppProvider
//       router={{
//         pathname,
//         searchParams: new URLSearchParams(),
//         navigate: (to) => nextRouter.push(to),
//       }}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer>
//           {/* Render pages based on pathname */}
//           {pathname === "/admin/dashboard" && (
//             <Grid container spacing={1}>
//               <Grid item xs={12}>
//                 <Skeleton height={14} />
//               </Grid>
//               <Grid item xs={12}>
//                 <Skeleton height={14} />
//               </Grid>
//               <Grid item xs={4}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={8}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={12}>
//                 <Skeleton height={150} />
//               </Grid>
//               <Grid item xs={12}>
//                 <Skeleton height={14} />
//               </Grid>
//               <Grid item xs={3}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={3}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={3}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={3}>
//                 <Skeleton height={100} />
//               </Grid>
//             </Grid>
//           )}

//           {pathname === "/admin/dashboard/categorylist" && <CategoryList />}
//           {pathname === "/admin/dashboard/addcategory" && <AddCategory />}
//           {pathname === "/admin/dashboard/productlist" && <ProductList />}
//           {pathname === "/admin/dashboard/addproduct" && <Addproduct />}
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }



// "use client";

// import React from "react";
// import { useRouter, usePathname } from "next/navigation";


// import {
//   Home,
//   ShoppingCart,
//   // BarChart2,   // if needed later
//   FolderPlus,
//   List,
//   PlusSquare,
// } from "lucide-react";


// import CategoryList from "./categorylist/page";
// import AddCategory from "./addcategory/page";
// import ProductList from "./productlist/page";
// import Addproduct from "./addproduct/page";

// const navigationItems = [
//   {
//     title: "Dashboard",
//     path: "/admin/dashboard",
//     icon: <Home size={20} />,
//   },
//   {
//     title: "Orders",
//     path: "/orders",
//     icon: <ShoppingCart size={20} />,
//   },
//   {
//     title: "Category List",
//     path: "/admin/dashboard/categorylist",
//     icon: <List size={20} />,
//   },
//   {
//     title: "Add Category",
//     path: "/admin/dashboard/addcategory",
//     icon: <FolderPlus size={20} />,
//   },
//   {
//     title: "Product List",
//     path: "/admin/dashboard/productlist",
//     icon: <List size={20} />,
//   },
//   {
//     title: "Add Product",
//     path: "/admin/dashboard/addproduct",
//     icon: <PlusSquare size={20} />,
//   },
// ];

// export default function Dashboard() {
//   const router = useRouter();
//   const pathname = usePathname();

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

//       {/* Main content */}
//       <main className="flex-grow p-8">
//         {pathname === "/admin/dashboard" && (
//           <div>
//             <h1 className="text-3xl font-bold mb-6">Dashboard Home</h1>
//             <div className="grid grid-cols-4 gap-6">
//               <div className="bg-white p-4 rounded shadow">Widget 1</div>
//               <div className="bg-white p-4 rounded shadow">Widget 2</div>
//               <div className="bg-white p-4 rounded shadow col-span-2">
//                 Large Widget
//               </div>
//               <div className="bg-white p-4 rounded shadow col-span-4 mt-6">
//                 Some stats or charts here
//               </div>
//             </div>
//           </div>
//         )}
//         {pathname === "/admin/dashboard/categorylist" && <CategoryList />}
//         {pathname === "/admin/dashboard/addcategory" && <AddCategory />}
//         {pathname === "/admin/dashboard/productlist" && <ProductList />}
//         {pathname === "/admin/dashboard/addproduct" && <Addproduct />}
//       </main>
//     </div>
//   );
// }


export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Fashion Style</h1>

      {/* <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow">Widget 1</div>
        <div className="bg-white p-4 rounded shadow">Widget 2</div>
        <div className="bg-white p-4 rounded shadow col-span-2">
          Large Widget
        </div>
        <div className="bg-white p-4 rounded shadow col-span-4 mt-6">
          Some stats or charts here
        </div>
      </div> */}
    </div>
  );
}
