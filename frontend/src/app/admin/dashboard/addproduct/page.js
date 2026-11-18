// "use client";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// const Addproduct = () => {
//   const validate = Yup.object({
//     name: Yup.string().required("Product Name is required"),
//     image: Yup.string().required("Product Image URL is required"),
//     price: Yup.string().required("Product Price is required"),

//     description: Yup.string().required("Product Description is required"),
//   });

//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     axios
//       .post("http://localhost:4000/api/products", values)
//       .then(() => {
//         alert("Product added successfully");
//         resetForm();
//       })
//       .catch((error) => {
//         console.error("Error adding product:", error);
//       })
//       .finally(() => setSubmitting(false));
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Add Product</h2>
//       <Formik
//         initialValues={{
//           name: "",
//           image: "",
//           price: "",
//           description: "",
//         }}
//         validationSchema={validate}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="space-y-4">
//             <div>
//               <Field
//                 type="text"
//                 name="name"
//                 placeholder="Product Name"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <div>
//               <Field
//                 type="text"
//                 name="image"
//                 placeholder="Product Image URL"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <ErrorMessage
//                 name="image"
//                 component="div"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <div>
//               <Field
//                 type="text"
//                 name="price"
//                 placeholder="Product Price"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <ErrorMessage
//                 name="price"
//                 component="div"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <div>
//               <Field
//                 as="textarea"
//                 name="description"
//                 placeholder="Product Description"
//                 rows="4"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <ErrorMessage
//                 name="description"
//                 component="div"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Addproduct;

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const AddProduct = () => {
//   const [categories, setCategories] = useState([]);



//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/categories")
//       .then((res) => {
//         if (Array.isArray(res.data.data)) {
//           setCategories(res.data.data);
//           console.log(res.data.data);

//         } else {
//           console.error("Unexpected response format:", res.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Failed to fetch categories", err);
//       });
//   }, []);


//   // Form validation
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Product Name is required"),
//     image: Yup.string().required("Image URL is required"),
//     price: Yup.number()
//       .typeError("Price must be a number")
//       .required("Price is required"),
//     description: Yup.string().required("Description is required"),
//     category: Yup.string().required("Category is required"),
//   });

//   // Form submission
//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     axios
//       .post("http://localhost:4000/api/products", values)
//       .then(() => {
//         alert("Product added successfully!");
//         resetForm();
//       })
//       .catch((err) => {
//         console.error("Error adding product:", err);
//         alert("Failed to add product.");
//       })
//       .finally(() => setSubmitting(false));
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>

//       <Formik
//         initialValues={{
//           name: "",
//           image: "",
//           price: "",
//           description: "",
//           category: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="space-y-4">
//             <div>
//               <Field
//                 name="name"
//                 type="text"
//                 placeholder="Product Name"
//                 className="w-full border p-2 rounded"
//               />
//               <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <Field
//                 name="image"
//                 type="text"
//                 placeholder="Image URL"
//                 className="w-full border p-2 rounded"
//               />
//               <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <Field
//                 name="price"
//                 type="text"
//                 placeholder="Price"
//                 className="w-full border p-2 rounded"
//               />
//               <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <Field
//                 name="description"
//                 as="textarea"
//                 placeholder="Description"
//                 className="w-full border p-2 rounded resize-none"
//               />
//               <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <Field as="select" name="category" className="w-full border p-2 rounded">
//                 <option value="">Select Category</option>
//                 {Array.isArray(categories) &&
//                   categories.map((cat) => (
//                     <option key={cat._id} value={cat._id}>
//                       {cat.name}
//                     </option>
//                   ))}
//               </Field>
//               <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//               >
//                 {isSubmitting ? "Submitting..." : "Add Product"}
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddProduct;

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const AddProduct = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/categories")
//       .then((res) => {
//         if (Array.isArray(res.data.data)) {
//           setCategories(res.data.data);
//         } else {
//           console.error("Unexpected response format:", res.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Failed to fetch categories", err);
//       });
//   }, []);

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Product Name is required"),
//     image: Yup.mixed().required("Image is required"),
//     price: Yup.number().typeError("Price must be a number").required("Price is required"),
//     stock: Yup.number().typeError("stock must be a number").required("stock is required"),
//     description: Yup.string().required("Description is required"),
//     category: Yup.string().required("Category is required"),
//   });

//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     const formData = new FormData();
//     formData.append("name", values.name);
//     formData.append("image", values.image); // file
//     formData.append("price", values.price);
//     formData.append("stock", values.stock);
//     formData.append("description", values.description);
//     formData.append("category", values.category);

//     axios
//       .post("http://localhost:4000/api/products", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then(() => {
//         alert("Product added successfully!");
//         resetForm();
//       })
//       .catch((err) => {
//         console.error("Error adding product:", err);
//         alert("Failed to add product.");
//       })
//       .finally(() => setSubmitting(false));
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>

//       <Formik
//         initialValues={{
//           name: "",
//           image: null,
//           price: "",
//           stock: "",
//           description: "",
//           category: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting, setFieldValue }) => (
//           <Form className="space-y-4">
//             <div>
//               <Field
//                 name="name"
//                 type="text"
//                 placeholder="Product Name"
//                 className="w-full border p-2 rounded"
//               />
//               <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={(event) => {
//                   const file = event.currentTarget.files[0];
//                   setFieldValue("image", file);
//                 }}
//                 className="w-full p-2 border rounded"
//               />
//               <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <Field
//                 name="price"
//                 type="text"
//                 placeholder="Price"
//                 className="w-full border p-2 rounded"
//               />
//               <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <Field
//                 name="stock"
//                 as="text"
//                 placeholder="stock"
//                 className="w-full border p-2 rounded"
//               />
//               <ErrorMessage name="stock" component="div" className="text-red-500 text-sm" />
//             </div>


//             <div>
//               <Field
//                 name="description"
//                 as="textarea"
//                 placeholder="Description"
//                 className="w-full border p-2 rounded resize-none"
//               />
//               <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <Field as="select" name="category" className="w-full border p-2 rounded">
//                 <option value="">Select Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat._id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </Field>
//               <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//               >
//                 {isSubmitting ? "Submitting..." : "Add Product"}
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddProduct;



"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((res) => {
        if (Array.isArray(res.data.data)) {
          setCategories(res.data.data);
        } else {
          console.error("Unexpected response format:", res.data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch categories", err);
      });
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Product Name is required"),
    image: Yup.mixed().required("Image is required"),
    price: Yup.number().typeError("Price must be a number").required("Price is required"),
    stock: Yup.number().typeError("Stock must be a number").required("Stock is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values.image); // file
    formData.append("price", values.price);
    formData.append("stock", values.stock);
    formData.append("description", values.description);
    formData.append("category", values.category);

    axios
      .post("http://localhost:4000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Product added successfully!");
        resetForm();
      })
      .catch((err) => {
        console.error("Error adding product:", err);
        alert("Failed to add product.");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>

      <Formik
        initialValues={{
          name: "",
          image: null,
          price: "",
          stock: "",
          description: "",
          category: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Product Name"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("image", file);
                }}
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                name="price"
                type="number"
                placeholder="Price"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                name="stock"
                type="number"
                placeholder="Stock"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="stock" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                name="description"
                as="textarea"
                placeholder="Description"
                className="w-full border p-2 rounded resize-none"
              />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field as="select" name="category" className="w-full border p-2 rounded">
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                {isSubmitting ? "Submitting..." : "Add Product"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
