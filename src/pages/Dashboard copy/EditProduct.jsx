import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UpdateToast from "../../components/UpdateToast";

function EditProduct() {
  const [showToast, setShowToast] = useState(false);
  const product = useLoaderData();

  const { title, brand, price, description, image } = product;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const userConfirmed = window.confirm(
      `Are you sure you want to update this product data: "${data.title}"?`
    );
    if (userConfirmed) {
      axios
        .patch(`http://localhost:3000/products/${product.id}`, data)
        .then(function () {
          setShowToast(true);
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
          <h1 className="text-2xl font-bold mb-6 text-center">Edit Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                defaultValue={title}
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
                defaultValue={price}
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
                defaultValue={brand}
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
                defaultValue={description}
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
                type="text"
                defaultValue={image}
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
        <UpdateToast product={product} onClose={() => setShowToast(false)} />
      )}
    </>
  );
}

export default EditProduct;
