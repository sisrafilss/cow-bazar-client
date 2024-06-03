import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ProductAddedToast from "../../components/ProductAddedToast";

function AddProduct() {
  const [addedProduct, setAddedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to add this product: "${data.title}"?`
    );

    if (userConfirmed) {
      axios
        .post("http://localhost:3000/products", data)
        .then(function (response) {
          console.log(response);
          setShowToast(true);
          setAddedProduct(response.data);
          reset();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Add a Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">Title is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">Price is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                type="text"
                {...register("brand", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.brand && (
                <span className="text-red-500 text-sm">Brand is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  Description is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                {...register("image", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.imageUrl && (
                <span className="text-red-500 text-sm">
                  Image URL is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {showToast && (
        <ProductAddedToast
          product={addedProduct}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default AddProduct;
