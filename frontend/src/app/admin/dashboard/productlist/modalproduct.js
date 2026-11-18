



// import React, { useState, useEffect } from "react";

// const ModalProduct = ({ show, onHide, product, isEditing, onSave, loading }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     description: "",
//     imageFile: null, // will hold selected File object
//   });

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         name: product.name || "",
//         price: product.price || "",
//         description: product.description || "",
//         imageFile: null,
//       });
//     }
//   }, [product]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, imageFile: file }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded max-w-lg w-full">
//         <h3 className="text-xl font-semibold mb-4">
//           {isEditing ? "Edit Product" : "View Product"}
//         </h3>

//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2">
//             Name:
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="border p-2 w-full"
//             />
//           </label>

//           <label className="block mb-2">
//             Price:
//             <input
//               name="price"
//               type="number"
//               value={formData.price}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="border p-2 w-full"
//             />
//           </label>

//           <label className="block mb-2">
//             Description:
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="border p-2 w-full"
//             />
//           </label>

//           {isEditing && (
//             <label className="block mb-4">
//               Upload Image:
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="mt-1"
//               />
//             </label>
//           )}

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onHide}
//               className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
//               disabled={loading}
//             >
//               Cancel
//             </button>
//             {isEditing && (
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 disabled={loading}
//               >
//                 {loading ? "Saving..." : "Save"}
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalProduct;

// import React, { useState, useEffect } from "react";

// const ModalProduct = ({ show, onHide, product, isEditing, onSave, loading }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     description: "",
//     imageFile: null,
//   });
//   const [imagePreview, setImagePreview] = useState(null);

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         name: product.name || "",
//         price: product.price || "",
//         description: product.description || "",
//         imageFile: null,
//       });

//       // Set initial image preview from product.imageUrl (adjust prop name)
//       const imgUrl = product.imageUrl || product.image; // adjust based on your data
//       if (imgUrl) {
//         setImagePreview(
//           imgUrl.startsWith("http")
//             ? imgUrl
//             : `http://localhost:4000/${imgUrl}`
//         );
//       } else {
//         setImagePreview(null);
//       }
//     }
//   }, [product]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, imageFile: file }));

//       // Preview new selected image
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded max-w-lg w-full">
//         <h3 className="text-xl font-semibold mb-4">
//           {isEditing ? "Edit Product" : "View Product"}
//         </h3>

//         {/* Show Image Preview */}
//         {imagePreview && (
//           <img
//             src={imagePreview}
//             alt={formData.name}
//             className="w-40 h-40 object-cover rounded mb-4 mx-auto"
//           />
//         )}

//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2">
//             Name:
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="border p-2 w-full"
//             />
//           </label>

//           <label className="block mb-2">
//             Price:
//             <input
//               name="price"
//               type="number"
//               value={formData.price}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="border p-2 w-full"
//             />
//           </label>

//           <label className="block mb-2">
//             Description:
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               className="border p-2 w-full"
//             />
//           </label>

//           {isEditing && (
//             <label className="block mb-4">
//               Upload Image:
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="mt-1"
//               />
//             </label>
//           )}

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onHide}
//               className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
//               disabled={loading}
//             >
//               Cancel
//             </button>
//             {isEditing && (
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 disabled={loading}
//               >
//                 {loading ? "Saving..." : "Save"}
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalProduct;



import React, { useState, useEffect } from "react";

const ModalProduct = ({ show, onHide, product, isEditing, onSave, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",           // Added stock
    imageFile: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        description: product.description || "",
        stock: product.stock || "",      // Initialize stock
        imageFile: null,
      });

      const imgUrl = product.imageUrl || product.image;
      if (imgUrl) {
        setImagePreview(
          imgUrl.startsWith("http")
            ? imgUrl
            : `http://localhost:4000/${imgUrl}`
        );
      } else {
        setImagePreview(null);
      }
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, imageFile: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded max-w-lg w-full">
        <h3 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Product" : "View Product"}
        </h3>

        {imagePreview && (
          <img
            src={imagePreview}
            alt={formData.name}
            className="w-40 h-40 object-cover rounded mb-4 mx-auto"
          />
        )}

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="border p-2 w-full"
            />
          </label>

          <label className="block mb-2">
            Price:
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="border p-2 w-full"
            />
          </label>

          <label className="block mb-2">
            Stock:
            <input
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="border p-2 w-full"
            />
          </label>

          <label className="block mb-2">
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="border p-2 w-full"
            />
          </label>

          {isEditing && (
            <label className="block mb-4">
              Upload Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1"
              />
            </label>
          )}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onHide}
              className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
              disabled={loading}
            >
              Cancel
            </button>
            {isEditing && (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProduct;

