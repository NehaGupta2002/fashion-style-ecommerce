"use client";

import { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";

const ModalCategory = ({ show, onHide, product, isEditing, onSave }) => {
  const [formData, setFormData] = useState(product);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-xl mx-4 rounded-lg shadow-lg p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {isEditing ? `Edit Category: ${product.name}` : `View Category: ${product.name}`}
          </h2>
          <button onClick={onHide} className="text-gray-500 hover:text-red-500">
            {/* <FaTimes className="text-lg" /> */}
          </button>
        </div>

        {/* Body */}
        <div>
          {isEditing ? (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end space-x-2 border-t pt-4">
          <button
            onClick={onHide}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Close
          </button>
          {isEditing && (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCategory;
