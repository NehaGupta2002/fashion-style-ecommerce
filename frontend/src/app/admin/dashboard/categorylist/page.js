

// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Delete as DeleteIcon,
//   Edit as EditIcon,
//   Visibility as VisibilityIcon,
// } from "@mui/icons-material";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Box,
//   IconButton,
// } from "@mui/material";

// const CategoryListComponent = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [modalType, setModalType] = useState(null); // 'view' | 'edit' | 'delete'
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     imageFile: null,
//     imageUrl: "",
//   });
//   const [loading, setLoading] = useState(false);

//   // Fetch categories
//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/categories");
//       setCategories(res.data.data);
//     } catch (error) {
//       console.error("Error fetching categories", error);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // Open modal (view/edit/delete)
//   const openModal = (category, type) => {
//     setSelectedCategory(category);
//     setModalType(type);
//     setFormData({
//       name: category.name || "",
//       description: category.description || "",
//       imageFile: null,
//       imageUrl: category.image || "",
//     });
//   };

//   // Close modal
//   const closeModal = () => {
//     setSelectedCategory(null);
//     setModalType(null);
//     setFormData({
//       name: "",
//       description: "",
//       imageFile: null,
//       imageUrl: "",
//     });
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle file input change (image upload)
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({
//         ...prev,
//         imageFile: file,
//         imageUrl: URL.createObjectURL(file),
//       }));
//     }
//   };

//   // Handle update category (with image upload)
//   const handleUpdate = async () => {
//     if (!selectedCategory) return;
//     try {
//       setLoading(true);
//       const updateData = new FormData();
//       updateData.append("name", formData.name);
//       updateData.append("description", formData.description);
//       if (formData.imageFile) {
//         updateData.append("image", formData.imageFile);
//       }

//       await axios.put(
//         `http://localhost:4000/api/categories/${selectedCategory._id}`,
//         updateData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       await fetchCategories();
//       closeModal();
//     } catch (error) {
//       console.error("Error updating category", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle delete category
//   const handleDelete = async () => {
//     if (!selectedCategory) return;
//     try {
//       setLoading(true);
//       await axios.delete(
//         `http://localhost:4000/api/categories/${selectedCategory._id}`
//       );
//       await fetchCategories();
//       closeModal();
//     } catch (error) {
//       console.error("Error deleting category", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   console.log("Categories data:", categories);

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-semibold mb-6 text-center">Category List</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300 shadow rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-3 text-left">ID</th>
//               <th className="border p-3 text-left">Name</th>
//               <th className="border p-3 text-left">Image</th>
//               <th className="border p-3 text-left">Description</th>
//               <th className="border p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((cat) => (
//               <tr
//                 key={cat._id}
//                 className="hover:bg-gray-50 bg-white border-b border-gray-300"
//               >
//                 <td className="border p-3">{cat._id.slice(-6)}</td>
//                 <td className="border p-3">{cat.name}</td>
//                 <td className="border p-3">
//                   {cat.image ? (
//                     <img
//                       src={`http://localhost:4000/uploads/${cat.image}`}
//                       alt={cat.name}
//                       className="w-12 h-12 object-cover rounded-full"
//                     />
//                   ) : (
//                     <span>No Image</span>
//                   )}
//                 </td>
//                 <td className="border p-3">{cat.description}</td>
//                 <td className="border p-3 text-center space-x-1">
//                   <IconButton
//                     color="primary"
//                     onClick={() => openModal(cat, "view")}
//                     title="View"
//                   >
//                     <VisibilityIcon />
//                   </IconButton>
//                   <IconButton
//                     color="info"
//                     onClick={() => openModal(cat, "edit")}
//                     title="Edit"
//                   >
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton
//                     color="error"
//                     onClick={() => openModal(cat, "delete")}
//                     title="Delete"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* View Modal */}
//       <Dialog open={modalType === "view"} onClose={closeModal} fullWidth maxWidth="sm">
//         <DialogTitle>Category Details</DialogTitle>
//         <DialogContent dividers>
//           <p><strong>Name:</strong> {selectedCategory?.name}</p>
//           <p><strong>Description:</strong> {selectedCategory?.description}</p>
//           {selectedCategory?.image ? (
//             <img
//               src={`http://localhost:4000/uploads/${selectedCategory.image}`}
//               alt={selectedCategory.name}
//               className="mt-4 w-full max-h-64 object-contain rounded"
//             />
//           ) : (
//             <p>No image available</p>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={closeModal}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Edit Modal */}
//       <Dialog open={modalType === "edit"} onClose={closeModal} fullWidth maxWidth="sm">
//         <DialogTitle>Edit Category</DialogTitle>
//         <DialogContent dividers>
//           <Box component="form" noValidate autoComplete="off" className="space-y-4">
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//             <TextField
//               fullWidth
//               label="Description"
//               name="description"
//               multiline
//               rows={3}
//               value={formData.description}
//               onChange={handleInputChange}
//             />
//             <div>
//               <label className="block mb-1 font-medium">Upload Image:</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//               />
//               {formData.imageUrl && (
//                 <img
//                   src={formData.imageUrl}
//                   alt="Preview"
//                   className="mt-2 w-32 h-32 object-cover rounded"
//                 />
//               )}
//             </div>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={closeModal} disabled={loading}>
//             Cancel
//           </Button>
//           <Button
//             onClick={handleUpdate}
//             disabled={loading}
//             variant="contained"
//             color="primary"
//           >
//             {loading ? "Saving..." : "Save"}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Delete Confirmation Modal */}
//       <Dialog open={modalType === "delete"} onClose={closeModal} fullWidth maxWidth="xs">
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent dividers>
//           Are you sure you want to delete the category <strong>{selectedCategory?.name}</strong>?
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={closeModal} disabled={loading}>
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDelete}
//             disabled={loading}
//             variant="contained"
//             color="error"
//           >
//             {loading ? "Deleting..." : "Delete"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default CategoryListComponent;



"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
} from "@mui/material";

const CategoryListComponent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalType, setModalType] = useState(null); // 'view' | 'edit' | 'delete'
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageFile: null,
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/categories");
      setCategories(res.data.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const openModal = (category, type) => {
    setSelectedCategory(category);
    setModalType(type);
    setFormData({
      name: category.name || "",
      description: category.description || "",
      imageFile: null,
      imageUrl: category.image ? `http://localhost:4000/uploads/${category.image}` : "",
    });
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setModalType(null);
    setFormData({
      name: "",
      description: "",
      imageFile: null,
      imageUrl: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imageUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleUpdate = async () => {
    if (!selectedCategory) return;
    try {
      setLoading(true);
      const updateData = new FormData();
      updateData.append("name", formData.name);
      updateData.append("description", formData.description);
      if (formData.imageFile) {
        updateData.append("image", formData.imageFile);
      }

      await axios.put(
        `http://localhost:4000/api/categories/${selectedCategory._id}`,
        updateData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      await fetchCategories();
      closeModal();
    } catch (error) {
      console.error("Error updating category", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedCategory) return;
    try {
      setLoading(true);
      await axios.delete(
        `http://localhost:4000/api/categories/${selectedCategory._id}`
      );
      await fetchCategories();
      closeModal();
    } catch (error) {
      console.error("Error deleting category", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Category List</h1>

      {/* Responsive Card View (Small Screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:hidden">
        {categories.map((cat) => (
          <div key={cat._id} className="border rounded-lg p-4 shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{cat.name}</h2>
              <div className="space-x-1">
                <IconButton
                  color="primary"
                  onClick={() => openModal(cat, "view")}
                  title="View"
                >
                  <VisibilityIcon />
                </IconButton>
                <IconButton
                  color="info"
                  onClick={() => openModal(cat, "edit")}
                  title="Edit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => openModal(cat, "delete")}
                  title="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            {cat.image ? (
              <img
                src={`http://localhost:4000/uploads/${cat.image}`}
                alt={cat.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
            ) : (
              <p className="text-gray-500">No Image</p>
            )}
            <p className="text-gray-700 text-sm">{cat.description}</p>
            <p className="text-xs text-gray-400 mt-2">ID: {cat._id.slice(-6)}</p>
          </div>
        ))}
      </div>

      {/* Table View (Medium+ Screens) */}
      <div className="hidden md:block overflow-x-auto mt-6">
        <table className="min-w-full border-collapse border border-gray-300 shadow rounded-lg mx-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Image</th>
              <th className="border p-3 text-left">Description</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr
                key={cat._id}
                className="hover:bg-gray-50 bg-white border-b border-gray-300"
              >
                <td className="border p-3">{cat._id.slice(-6)}</td>
                <td className="border p-3">{cat.name}</td>
                <td className="border p-3">
                  {cat.image ? (
                    <img
                      src={`http://localhost:4000/uploads/${cat.image}`}
                      alt={cat.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td className="border p-3">{cat.description}</td>
                <td className="border p-3 text-center space-x-1">
                  <IconButton
                    color="dark"
                    onClick={() => openModal(cat, "view")}
                    title="View"
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    color="dark"
                    onClick={() => openModal(cat, "edit")}
                    title="Edit"
                  >
                    <EditIcon />
                  
                  </IconButton>
                  
                  <IconButton
                    color="dark"
                    onClick={() => openModal(cat, "delete")}
                    title="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <Dialog open={modalType === "view"} onClose={closeModal} fullWidth maxWidth="sm">
        <DialogTitle>Category Details</DialogTitle>
        <DialogContent dividers>
          <p><strong>Name:</strong> {selectedCategory?.name}</p>
          <p><strong>Description:</strong> {selectedCategory?.description}</p>
          {selectedCategory?.image ? (
            <img
              src={`http://localhost:4000/uploads/${selectedCategory.image}`}
              alt={selectedCategory.name}
              className="mt-4 w-full max-h-64 object-contain rounded"
            />
          ) : (
            <p>No image available</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={modalType === "edit"} onClose={closeModal} fullWidth maxWidth="sm">
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate autoComplete="off" className="space-y-4">
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={3}
              value={formData.description}
              onChange={handleInputChange}
            />
            <div>
              <label className="block mb-1 font-medium">Upload Image:</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {formData.imageUrl && (
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded"
                />
              )}
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} disabled={loading} variant="contained" color="primary">
            {loading ? "Saving..." : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={modalType === "delete"} onClose={closeModal} fullWidth maxWidth="xs">
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent dividers>
          Are you sure you want to delete <strong>{selectedCategory?.name}</strong>?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} disabled={loading}>Cancel</Button>
          <Button onClick={handleDelete} disabled={loading} variant="contained" color="error">
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoryListComponent;
