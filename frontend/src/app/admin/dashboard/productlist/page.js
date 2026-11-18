"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ModalProduct from "./modalproduct";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductListComponent = () => {
  const [productData, setProductData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => setProductData(res.data.products || []))
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleShowModal = (product, edit = false) => {
    setSelectedProduct(product);
    setIsEditing(edit);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsEditing(false);
    setModalShow(false);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/products/${id}`)
      .then(() => {
        setProductData((prev) => prev.filter((p) => p._id !== id));
      })
      .catch((err) => console.error("Delete failed:", err));
  };

  const handleUpdateProduct = async (formData) => {
    if (!selectedProduct) return;

    try {
      setLoading(true);
      const updateData = new FormData();
      updateData.append("name", formData.name);
      updateData.append("price", formData.price);
      updateData.append("description", formData.description);
      if (formData.imageFile) {
        updateData.append("image", formData.imageFile);
      }

      await axios.put(
        `http://localhost:4000/api/products/${selectedProduct._id}`,
        updateData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      await refreshData();
      handleCloseModal();
    } catch (error) {
      console.error("Error updating product", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="max-w-7xl mx-auto px-4 py-8 overflow-x-auto">
      <div className="w-full px-2 py-2 overflow-x-auto">

      <h2 className="text-3xl font-semibold text-center mb-6 text-black ">
        Product List
      </h2>

      {/* Table view for md and up */}
      <div className="hidden md:block">
        <table className="w-full text-sm border border-gray-300 text-black">
          <thead className="bg-gray-100 ">
            <tr>
              <th className="p-3 border text-left">ID</th>
              <th className="p-3 border text-left">Name</th>
              <th className="p-3 border text-left">Price</th>
              <th className="p-3 border text-left">Image</th>
              <th className="p-3 border text-left">Description</th>
              <th className="p-3 border text-left">Stock</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product._id} className="border-t ">
                <td className="p-3 border break-words">{product._id}</td>
                <td className="p-3 border">{product.name}</td>
                <td className="p-3 border w-auto">₹{product.price}</td>
                <td className="p-3 border">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-auto h-auto object-cover rounded"
                  />
                </td>
                <td className="p-3 border w-auto">{product.description}</td>
                <td className="p-3 border">{product.stock}</td>
                <td className="p-3 border text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleShowModal(product, false)}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                      title="View"
                    >
                      <VisibilityIcon style={{ color: "#000" }} fontSize="small" />
                    </button>
                    <button
                      onClick={() => handleShowModal(product, true)}
                      className="p-2 bg-gray-200 hover:bg-blue-200 rounded-full"
                      title="Edit"
                    >
                      <EditIcon style={{ color: "#000" }} fontSize="small" />
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="p-2 bg-gray-200 hover:bg-red-200 rounded-full"
                      title="Delete"
                    >
                      <DeleteIcon style={{ color: "#000" }} fontSize="small" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="md:hidden space-y-4">
        {productData.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-black dark:text-white">{product.name}</h3>
              <span className="text-sm text-gray-600">₹{product.price}</span>
            </div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">{product.description}</p>
            <div className="flex justify-end space-x-2 mt-2">
              <button
                onClick={() => handleShowModal(product, false)}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
              >
                <VisibilityIcon style={{ color: "#000" }} fontSize="small" />
              </button>
              <button
                onClick={() => handleShowModal(product, true)}
                className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full"
              >
                <EditIcon style={{ color: "#000" }} fontSize="small" />
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="p-2 bg-red-100 hover:bg-red-200 rounded-full"
              >
                <DeleteIcon style={{ color: "#000" }} fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && modalShow && (
        <ModalProduct
          show={modalShow}
          onHide={handleCloseModal}
          product={selectedProduct}
          isEditing={isEditing}
          onSave={handleUpdateProduct}
          loading={loading}
        />
      )}
    </div>
  );
};

export default ProductListComponent;


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import ModalProduct from "./modalproduct";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const ProductListComponent = () => {
//   const [productData, setProductData] = useState([]);
//   const [modalShow, setModalShow] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const refreshData = () => {
//     axios
//       .get("http://localhost:4000/api/products")
//       .then((res) => setProductData(res.data.products || []))
//       .catch((err) => console.error("Error fetching data:", err));
//   };

//   useEffect(() => {
//     refreshData();
//   }, []);

//   const handleShowModal = (product, edit = false) => {
//     setSelectedProduct(product);
//     setIsEditing(edit);
//     setModalShow(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setIsEditing(false);
//     setModalShow(false);
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:4000/api/products/${id}`)
//       .then(() => {
//         setProductData((prev) => prev.filter((p) => p._id !== id));
//       })
//       .catch((err) => console.error("Delete failed:", err));
//   };

//   const handleUpdateProduct = async (formData) => {
//     if (!selectedProduct) return;

//     try {
//       setLoading(true);
//       const updateData = new FormData();
//       updateData.append("name", formData.name);
//       updateData.append("price", formData.price);
//       updateData.append("description", formData.description);
//       if (formData.imageFile) {
//         updateData.append("image", formData.imageFile);
//       }

//       await axios.put(
//         `http://localhost:4000/api/products/${selectedProduct._id}`,
//         updateData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       await refreshData();
//       handleCloseModal();
//     } catch (error) {
//       console.error("Error updating product", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8  justify-center overflow-x-auto">
//       <h2 className="text-3xl font-semibold text-center mb-6">Product List</h2>

//       {/* Table view for md and up */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="min-w-full border border-gray-300 text-sm text-left justify-center">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 border">ID</th>
//               <th className="p-3 border">Name</th>
//               <th className="p-3 border">Price</th>
//               <th className="p-3 border">Image</th>
//               <th className="p-3 border">Description</th>
//               <th className="p-3 border">Stock</th>
//               <th className="p-3 border text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productData.map((product) => (
//               <tr key={product._id} className="border-t">
//                 <td className="p-3 border">{product._id}</td>
//                 <td className="p-3 border">{product.name}</td>
//                 <td className="p-3 border">₹{product.price}</td>
//                 <td className="p-3 border">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                 </td>
//                 <td className="p-3 border">{product.description}</td>
//                 <td className="p-3 border">{product.stock}</td>
//                 <td className="p-3 border text-center">
//                   <div className="flex items-center justify-center space-x-2">
//                     <button
//                       onClick={() => handleShowModal(product, false)}
//                       className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
//                       title="View"
//                     >
//                       <VisibilityIcon fontSize="small" />
//                     </button>
//                     <button
//                       onClick={() => handleShowModal(product, true)}
//                       className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
//                       title="Edit"
//                     >
//                       <EditIcon fontSize="small" />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(product._id)}
//                       className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
//                       title="Delete"
//                     >
//                       <DeleteIcon fontSize="small" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Card view for mobile */}
//       <div className="md:hidden space-y-4">
//         {productData.map((product) => (
//           <div
//             key={product._id}
//             className="border border-gray-300 rounded-lg p-4 shadow-sm"
//           >
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <span className="text-sm text-gray-600">₹{product.price}</span>
//             </div>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded mb-2"
//             />
//             <p className="text-sm text-gray-700 mb-3">
//               {product.description}
//             </p>
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => handleShowModal(product, false)}
//                 className="bg-gray-700 text-white p-2 rounded-full"
//                 title="View"
//               >
//                 <VisibilityIcon fontSize="small" />
//               </button>
//               <button
//                 onClick={() => handleShowModal(product, true)}
//                 className="bg-blue-600 text-white p-2 rounded-full"
//                 title="Edit"
//               >
//                 <EditIcon fontSize="small" />
//               </button>
//               <button
//                 onClick={() => handleDelete(product._id)}
//                 className="bg-red-600 text-white p-2 rounded-full"
//                 title="Delete"
//               >
//                 <DeleteIcon fontSize="small" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedProduct && modalShow && (
//         <ModalProduct
//           show={modalShow}
//           onHide={handleCloseModal}
//           product={selectedProduct}
//           isEditing={isEditing}
//           onSave={handleUpdateProduct}
//           loading={loading}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductListComponent;



