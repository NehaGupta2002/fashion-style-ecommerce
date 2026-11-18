
"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const AddCategory = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Category Name is required"),
    description: Yup.string().required("Category Description is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    axios
      .post("http://localhost:4000/api/categories", formData)
      .then(() => {
        alert("Category added successfully");
        resetForm();
        setSelectedFile(null);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Add Category</h2>
      <p className="text-sm text-gray-500 mb-6">Create or Add a new category</p>

      <Formik
        initialValues={{ name: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Category Name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <input
                  type="file"
                  name="image"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setSelectedFile(file);
                    setFieldValue("image", file);
                  }}
                  className="w-full p-3 border rounded-md"
                />
              </div>
            </div>

            <div>
              <Field
                as="textarea"
                name="description"
                placeholder="Category Description"
                rows={4}
                className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCategory;
