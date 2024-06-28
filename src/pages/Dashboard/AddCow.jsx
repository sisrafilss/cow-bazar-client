import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { apiBaseUrl } from "../../config";
import { useState } from "react";
import LoadingComponent from "../../components/LoadingComponent";

function AddCow() {
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to add this cow: "${data.title}"?`
    );
    let modifiedData = {};
    if (userConfirmed) {
      setIsLoading(true);
      console.log(data);
      const formData = new FormData();
      formData.append("image", data.image[0]);

      // uploading the image to imgBB
      axios
        .post(`https://api.imgbb.com/1/upload`, formData, {
          params: {
            key: import.meta.env.VITE_IMGBB_API_KEY,
          },
        })
        .then((res) => {
          console.log("ImgBB api response: ", res.data?.data);
          delete data.image;
          modifiedData = { ...data, image_url: res.data?.data?.display_url };

          // uploading data to DB
          axios
            .post(`${apiBaseUrl}/cows`, modifiedData, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(function (response) {
              setIsLoading(false);
              if (response.data?.insertedId) {
                toast.success("Cow added successfully!");
              }
              reset();
            })
            .catch(function (error) {
              console.log(error);
            });
        });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Add a Cow</h1>
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
                Long Description
              </label>
              <textarea
                {...register("long_description", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.long_description && (
                <span className="text-red-500 text-sm">
                  Long Description is required
                </span>
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
                Age
              </label>
              <input
                type="number"
                {...register("age", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.age && (
                <span className="text-red-500 text-sm">Age is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Breed
              </label>
              <input
                type="text"
                {...register("breed", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.breed && (
                <span className="text-red-500 text-sm">Breed is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                {...register("weight", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.weight && (
                <span className="text-red-500 text-sm">Weight is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.location && (
                <span className="text-red-500 text-sm">
                  Location is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                step="0.1"
                {...register("rating", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.rating && (
                <span className="text-red-500 text-sm">Rating is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                accept="image/jpeg, image/png"
                {...register("image", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.image && (
                <span className="text-red-500 text-sm">Image is required</span>
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
      <LoadingComponent
        isLoading={isLoading}
        message="Adding... Please Wait..."
      />
    </>
  );
}

export default AddCow;
